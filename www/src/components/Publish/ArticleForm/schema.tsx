import {minLength, minValue, number, object, string} from 'valibot';

export type FormData = {
    category: number;
    tagIds: string;
    coverImage: string;
    abstracts: string;
};
// https://www.react-hook-form.com/get-started/#Applyvalidation
export const FormSchema = object({
    abstracts: string("请输入摘要", [
        minLength(100, "文章摘要至少100字")
    ]),
    category: number("请选择类别", [
        minValue(1, "请选择类别")
    ]),
    tagIds: string("请选择标签",[
        minLength(1,"请选择标签")
    ]),
    coverImage: string("请选择封面图"),
});