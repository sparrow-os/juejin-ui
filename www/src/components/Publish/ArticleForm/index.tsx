import * as React from 'react';
import {memo} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {TextField} from "@mui/material";
import CategoryTree from "../CategoryTree";
import CoverImage from "../CoverImage";
import Tag from "../Tag";
import {useArticleForm} from "../../../store/articleEditor";

//禁用拖动
// function PaperComponent(props: PaperProps) {
//     return (
//         <Draggable
//             handle="#article-form-label"
//             cancel={'[class*="MuiDialogContent-root"]'}
//         >
//             <Paper {...props} />
//         </Draggable>
//     );
// }

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="left" ref={ref} {...props} />;
});

function ArticleForm() {
    const articleForm = useArticleForm((articleForm) => articleForm);
    const handleClose = () => {
        console.log(JSON.stringify(articleForm, null, 2));
        articleForm.closeDialog();
    };
    return (
        <React.Fragment>
            <Dialog
                open={articleForm.open}
                scroll="body"
                TransitionComponent={Transition}
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
};

export default memo(ArticleForm)
