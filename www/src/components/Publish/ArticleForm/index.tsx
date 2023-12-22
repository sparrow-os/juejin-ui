import React, { memo, useCallback } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { TextField } from '@mui/material';
import { FieldValues, Form, useForm } from 'react-hook-form';
import CategoryTree from '../CategoryTree';
import CoverImage from '../CoverImage';
import Tag from '../Tag';
import { useArticleForm } from '../../../store/articleEditor';
import { valibotResolver } from '@hookform/resolvers/valibot';
import {
  Output,
  ValiError,
  array,
  maxLength,
  minLength,
  number,
  object,
  string,
} from 'valibot';

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

const ArticlePulishSchema = object({
  category: string('please type in string', [
    minLength(1, 'Please select a category'),
  ]),
  abstracts: string('please type in string', [
    minLength(8, 'Please type in at least 8 charactors'),
    maxLength(300, 'Abstracts characters should exceed 300'),
  ]),
});

type FormData = Output<typeof ArticlePulishSchema>;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function ArticleForm() {
  const articleForm = useArticleForm((articleForm: FormData) => articleForm);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: valibotResolver(ArticlePulishSchema),
  });

  console.log('errors', errors);

  const onSubmit = useCallback((values: FieldValues) => {
    console.log('values', values);
  }, []);

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>{'发布文章'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="article-form">
              <CategoryTree register={register} />
              <Tag />
              <CoverImage />
              <TextField
                {...register('abstracts')}
                multiline
                sx={{ m: 1, width: 300 }}
                rows={4}
                label="摘要"
                id="fullWidth"
              />
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
}

export default memo(ArticleForm);
