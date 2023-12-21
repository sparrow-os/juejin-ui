import {minLength, minValue, number, object, string} from 'valibot';

export type FormData = {
    title: string,
    category: number;
    tagIds: number[];
    coverImage: string;
    abstracts: string;
    content: string;
};
// https://www.react-hook-form.com/get-started/#Applyvalidation
export const FormSchema = object({
    title: string("请输入标题", [
        minLength(20, "标题至少20个字")
    ]),
    abstracts: string("请输入摘要", [
        minLength(100, "文章摘要至少100字")
    ]),
    content: string("请输入内容", [
        minLength(100, "文章内容至少100字")
    ]),
    category: number("请选择类别", [
        minValue(1, "请选择类别")
    ]),
    tagIds: string("请选择标题"),
    coverImage: string("请选择封面图"),
});