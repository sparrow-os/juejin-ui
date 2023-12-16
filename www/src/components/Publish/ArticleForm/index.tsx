import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {forwardRef, memo, useImperativeHandle, useState} from "react";
import Paper, {PaperProps} from '@mui/material/Paper';
import Draggable from 'react-draggable';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {TreeView} from '@mui/x-tree-view/TreeView';
import {TreeItem} from '@mui/x-tree-view/TreeItem';
import {
    Checkbox,
    FormControl, FormControlLabel,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent, TextField
} from "@mui/material";
import CategoryTree from "../CategoryTree";

function PaperComponent(props: PaperProps) {
    return (
        <Draggable
            handle="#article-form-label"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="left" ref={ref} {...props} />;
});


export interface ArticleFormRef {
    openForm: () => void;
}

interface ArticleForm {
    category: string[];
    tags: string[];
    abstracts: string;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    {label: 'The Shawshank Redemption', year: 1994},
    {label: 'The Godfather', year: 1972},
    {label: 'The Godfather: Part II', year: 1974},
    {label: 'The Dark Knight', year: 2008},
    {label: '12 Angry Men', year: 1957},
    {label: "Schindler's List", year: 1993},
    {label: 'Pulp Fiction', year: 1994},
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    {label: 'The Good, the Bad and the Ugly', year: 1966},
    {label: 'Fight Club', year: 1999},
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    {label: 'Forrest Gump', year: 1994},
    {label: 'Inception', year: 2010},
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    {label: "One Flew Over the Cuckoo's Nest", year: 1975},
    {label: 'Goodfellas', year: 1990},
    {label: 'The Matrix', year: 1999},
    {label: 'Seven Samurai', year: 1954},
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    }
];
const ArticleForm = forwardRef((props, ref) => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    // 暴露方法给父组件，以便获取子组件内的状态
    useImperativeHandle(ref, () => ({
        openForm: () => {
            console.log("open false");
            setOpen(true);
        },
    }));

    const [articleForm, setArticleForm] = React.useState<ArticleForm>({
        category: [''],
        tags: [''],
        abstracts: ""
    });


    const tagHandleChange = (event: SelectChangeEvent<typeof articleForm.tags>) => {
        const {target: {value}} = event;
        setArticleForm({...articleForm, tags: value as string[]});
    };

    const treeHandleChoose = (event: React.SyntheticEvent, nodeIds: string[]) => {
        //这里用数组是为了选中后不关闭树
        //判断 是否是叶子节点
        setArticleForm({...articleForm, category: nodeIds});
    };

    const [age, setAge] = React.useState<string>('');

    const categoryChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
    ];


    return (
        <React.Fragment>
            <Dialog
                open={open}
                scroll="body"
                TransitionComponent={Transition}
                PaperComponent={PaperComponent}
                keepMounted
                onClose={handleClose}
                aria-describedby="article-form"
                aria-labelledby="article-form-label"
            >
                <DialogTitle>{"发布文章"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="article-form">
                        <CategoryTree/>
                        <FormControl sx={{m: 1, width: 300}}>
                            <InputLabel id="demo-multiple-name-label">标签</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={articleForm.tags}
                                onChange={tagHandleChange}
                                input={<OutlinedInput label="Tag"/>}
                                renderValue={(selected) => selected.join(', ')}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={articleForm.tags.indexOf(name) > -1}/>
                                        <ListItemText primary={name}/>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField multiline sx={{m: 1, width: 300}} rows={4} label="摘要" id="fullWidth"/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>取消</Button>
                    <Button onClick={handleClose}>确定</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
});

export default memo(ArticleForm)
