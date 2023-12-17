import * as React from 'react';
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
import {useEffect} from "react";
import httpClient from "../../../utils/HttpClient";
import toast, {Toaster} from "react-hot-toast";


//标签的对象定义
export interface TagItem {
    id: number;
    tagName: string;
}

export default function Tag() {
    //标签选中的ID
    const [keyList, setKeys] = React.useState<string[]>([]);
    //这里必须是[], 不允许[''] 否则下方选择框会自动加入空白选项
    const [valueList, setValueList] = React.useState<string[]>([]);
    //服务器返回的标签列表
    const [tagList, setTagList] = React.useState<TagItem[]>([]);
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
        const  valueList=value as string[];
        if(valueList.length>3){
            toast.error("最多只能选择三个标签");
            return;
        }
        setValueList(value as string[]);
    };
    return (
        <FormControl sx={{m: 1, width: 300}}>
            <InputLabel id="tag">标签</InputLabel>
            <Select
                labelId="tag"
                id="tag"
                multiple
                value={valueList}
                onChange={tagHandleChange}
                input={<OutlinedInput label="标签"/>}
                renderValue={(selected) => selected.join(',')}
            >
                {tagList.map((entry: TagItem) => (
                    <MenuItem  key={entry.id} value={entry.tagName}>
                        <Checkbox checked={valueList.indexOf(entry.tagName) > -1}/>
                        <ListItemText primary={entry.tagName}/>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}