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
import {SubmitHandler, useForm} from "react-hook-form";
import {valibotResolver} from "@hookform/resolvers/valibot";
import {FormData, FormSchema} from "./schema";
import {number, string} from "valibot/dist";
import httpClient from "../../../utils/HttpClient";
import {saveToken} from "../../../utils/token";

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
    const useFormReturn= useForm<FormData>({
        resolver: valibotResolver(FormSchema), // Useful to check TypeScript regressions
        defaultValues: {
            category: -1,
            tagIds:"",
            coverImage: "",
            abstracts: "",
        }
    });


    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue
    }=useFormReturn;

    console.log(errors);
    const onSubmit: SubmitHandler<FormData> = async (data) => {

        await httpClient.post('/login', data)
            .then(function (data) {
                alert(JSON.stringify(articleForm));
                console.log(data);
            })
            .catch(function (error) {

            });
    }

    const handleClose = () => {
        articleForm.closeDialog();
    };
    const handleChange = (event: any) => {
        articleForm.setContent(event.target.value);
    }
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
                <form className="w-[100%] " onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <DialogContentText id="article-form">
                            {/*https://stackoverflow.com/questions/60902521/how-to-pass-register-to-react-hook-forms-factory-component*/}
                            <CategoryTree register={register} name="category"/>
                            {errors.category &&
                                <span className="text-red-700 text-sm" role="alert">{errors.category.message}</span>}
                            <Tag useFormReturn={useFormReturn}/>
                            {errors.tagIds &&
                                <span className="text-red-700 text-sm" role="alert">{errors.tagIds.message}</span>}
                            <br/>

                            <CoverImage/>
                            <TextField {...register("abstracts")} onChange={handleChange} multiline sx={{m: 1, width: 300}} rows={4} label="摘要"
                                       id="fullWidth"/><br/>
                            {errors.abstracts &&
                                <span className="text-red-700 text-sm" role="alert">{errors.abstracts.message}</span>}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>取消</Button>
                        <Button type="submit">确定</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
};

export default memo(ArticleForm)
