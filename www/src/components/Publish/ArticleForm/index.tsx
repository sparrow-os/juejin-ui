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
import {
    SelectChangeEvent, TextField
} from "@mui/material";
import CategoryTree from "../CategoryTree";
import CoverImage from "../CoverImage";
import Tag from "../Tag";

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
                        <Tag/>
                        <CoverImage/>
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
