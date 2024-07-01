import * as React from 'react';
import {memo, ReactNode, useEffect} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {TreeView} from '@mui/x-tree-view/TreeView';
import {TreeItem} from '@mui/x-tree-view/TreeItem';
import {FormControl, InputLabel, OutlinedInput, Select, TextField} from "@mui/material";
import httpClient from "../../../utils/HttpClient";
import toast from "react-hot-toast";
import {useArticleForm} from "../../../store/articleEditor";
import {useFormContext} from "react-hook-form";

//这里必须 在CategoryTree方法外边，相当于相前组件的全局变量
interface CategoryTreeItem {
    id: number;//这里必须 是number ，即使是string 也不会类型转换
    name: string;
    parentId: number;
    icon: string;
    children: CategoryTreeItem[];
}

const categoryTreeItemMap = new Map<number, CategoryTreeItem>([]);

function CategoryTree() {
    const articleForm = useArticleForm((articleForm) => articleForm);

    const {
        formState: {errors},
        setValue,
        setError, clearErrors,
    } = useFormContext();
    // useEffect里面的这个函数会在第一次渲染之后和更新完成后执行
    // 相当于 componentDidMount 和 componentDidUpdate:
    /**
     * useEffect 接收的函数，要么返回一个能清除副作用的函数，要么就不返回任何内容。而 async 返回的是 promise。
     *
     * 所以我们在用接口请求后台数据的时候需要这样写。
     *
     * useEffect(() => {
     * // 更优雅的方式
     * const fetchData = async () => {
     *   const result = await axios(
     *     'https://.com/api/xxx',
     *   );
     *   setData(result.data);
     * };
     * fetchData();
     * }, []);
     *
     * // 而不是这样写
     * // 注意 async 的位置
     * // 这种写法，虽然可以运行，但是会发出警告
     * // 每个带有 async 修饰的函数都返回一个隐含的 promise
     * // 但是 useEffect 函数有要求：要么返回清除副作用函数，要么就不返回任何内容
     * useEffect(async () => {
     * const result = await axios(
     *   'https://xxx.com/api/xxx',
     * );
     * setData(result.data);
     * }, []);
     * https://zhuanlan.zhihu.com/p/571715690
     */
    const buildCategoryTreeMap = (node: CategoryTreeItem) => {
        categoryTreeItemMap.set(node.id, node);
        if (node.children && node.children.length > 0) {
            node.children.map((child) => {
                buildCategoryTreeMap(child);
            })
        }
    }

    let _mounted = false;
    useEffect(() => {
        if (!_mounted) {
            const fetchData = async () => {
                try {
                    const data: any = await httpClient.get('/category/list');
                    debugger;
                    const categoryTree = data as CategoryTreeItem[];
                    if (categoryTree.length == 0) {
                        console.log("category tree is empty");
                        return;
                    }
                    const root = categoryTree[0];
                    buildCategoryTreeMap(root);
                    setCategoryTree(root);
                    console.log(categoryTree);
                } catch (error) {
                    debugger;
                    toast.error("Error " + error);
                }
            };
            fetchData();
            _mounted = true;
        }
    }, []);//https://blog.csdn.net/ImagineCode/article/details/12462751 //不加依赖项会导致死循环

    //当前选中的结果
    const [categoryTreeValue, setCategoryTreeValue] = React.useState<string[]>([]);
    //必须加state 才能正确渲染
    const [categoryTree, setCategoryTree] = React.useState<CategoryTreeItem>();

    const treeItemHandleChoose = (event: React.SyntheticEvent, nodeIds: string[]) => {
        //这里用数组是为了选中后不关闭树
        //判断 是否是叶子节点
        //通过nodeIds 找到对应的名字
        const categoryId = parseInt(nodeIds[0], 10);
        const categoryNode = categoryTreeItemMap.get(categoryId);
        if (categoryNode != null && categoryNode.children != null && categoryNode.children.length > 0) {
            return;
        }
        const categoryName: string = categoryNode ? categoryNode.name : '';
        setCategoryTreeValue([categoryName]);
        articleForm.setCategory(categoryId);

        if (categoryName == '') {
            //必须和定义时的类型一致
            setValue('category', 0);
            setError("category", {type: '', message: "请选择类别"});
        } else {
            clearErrors("category");
            setValue("category", categoryId);
        }
    };

    const treeRender = (node: CategoryTreeItem): ReactNode => {
        //这里不允许 number 否则警告
        return <TreeItem nodeId={node.id + ""} key={node.id} label={node.name}>
            {node.children?.map((child: CategoryTreeItem) => treeRender(child))}
        </TreeItem>
    }

    const treeView = (
        <TreeView
            multiSelect onNodeSelect={treeItemHandleChoose}
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpandIcon={<ChevronRightIcon/>}>
            {
                categoryTree?.children.map((item): ReactNode => treeRender(item))
            }
        </TreeView>
    )

    return (
        <FormControl sx={{m: 1, width: 300}}>
            <InputLabel id="category">分类</InputLabel>
            <Select
                labelId="category"
                id="category"
                value={categoryTreeValue}
                multiple
                renderValue={(selected) => selected.join("")}
                input={<OutlinedInput label="分类"/>}>
                {treeView}
            </Select>
        </FormControl>
    )
};

export default memo(CategoryTree)
