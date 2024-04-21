import {minLength,object, string} from 'valibot';

export type FormData = {
    title: string
};
// https://www.react-hook-form.com/get-started/#Applyvalidation
export const FormSchema = object({
    title: string("请输入标题", [
        minLength(20, "标题至少20个字")
    ])
});