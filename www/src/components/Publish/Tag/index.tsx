import * as React from 'react';
import {useEffect} from 'react';
import {
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent
} from "@mui/material";
import httpClient from "../../../utils/HttpClient";
import toast from "react-hot-toast";
import {useArticleForm} from "../../../store/articleEditor";
import {useFormContext} from "react-hook-form";


//标签的对象定义
export interface TagItem {
    id: number;
    tagName: string;
}

const tagKvMap = new Map<number, TagItem>([]);


export default function Tag() {
    const articleForm = useArticleForm((articleForm) => articleForm);
    //服务器返回的标签列表
    const [tagList, setTagList] = React.useState<TagItem[]>([]);
    const {
        formState: {errors},
        setValue,
        setError, clearErrors,
    } = useFormContext();

    let _mounted = false;
    useEffect(() => {
        if (_mounted) {
            return;
        }
        console.log("tag index effect ....")
        const fetchData = async () => {
            try {
                const data: any = await httpClient.get('/tag/list');
                const tagItems = data as TagItem[];
                if (tagItems.length == 0) {
                    console.log("category tree is empty");
                    return;
                }
                tagItems.forEach((item) => {
                    tagKvMap.set(item.id, item);
                });
                setTagList(tagItems);
                console.log(tagItems);
            } catch (error) {
                debugger;
                toast.error("Error " + error);
            }
        };
        fetchData();
        _mounted = true;
    }, [])


    const tagHandleChange = (event: SelectChangeEvent<typeof valueList>) => {
        const {target: {value}} = event;
        const valueList = value as number[];
        if (valueList.length > 3) {
            toast.error("最多只能选择三个标签");
            return;
        }
        //https://react-hook-form.com/docs/useform/seterror
        // https://juejin.cn/post/7208440329652650043
        if (valueList.length == 0) {
            //会根据 value 判断
            setValue("tagIds", []);
            setError("tagIds", {"type": "manual", message: "请选择标签"})
        } else {
            clearErrors("tagIds");
            setValue("tagIds", valueList.join(","));
        }
        console.log(errors);
        //https://stackoverflow.com/questions/73108589/how-to-get-selected-checkbox-value-and-id-from-the-multi-select-in-mui
        articleForm.setTagIds(valueList);
    };

    const renderValue = (selected: number[]) => {
        let values: any = [];
        selected.forEach((tagId) => {
            values.push(tagKvMap.get(tagId)?.tagName)
        });
        return values.join(" ");
    }

    const checked = (tagId: number): boolean => {
        return articleForm.tagIds.indexOf(tagId) > -1;
    }

    return (

        <FormControl sx={{m: 1, width: 300}}>
            <InputLabel id="tag">标签</InputLabel>
            <Select onChange={tagHandleChange}
                    labelId="tag"
                    id="tag"
                    multiple
                    value={articleForm.tagIds}
                    input={<OutlinedInput label="标签"/>}
                    renderValue={renderValue}
            >
                {tagList.map((entry: TagItem) => (
                    <MenuItem key={entry.id} value={entry.id}>
                        <Checkbox checked={checked(entry.id)}/>
                        <ListItemText primary={entry.tagName}/>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}