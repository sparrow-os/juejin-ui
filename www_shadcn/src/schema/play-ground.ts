import * as v from "valibot";

export const PlayGroundFormSchema = v.object({
    title: v.pipe(
        v.string("请输入标题"),
        v.minLength(8,'标题过短，最少8个字符'),
        v.nonEmpty("请输入标题")
    ),
    category: v.pipe(
        v.string(),
        v.nonEmpty("请选择类别")
    ),
    abstract: v.pipe(
        v.string(),
        v.nonEmpty("请输入文章摘要."),
        v.minLength(32, "摘要过短，最少32个字符")
    ),
    cover: v.pipe(
        v.string(),
        v.nonEmpty('请上传文章封面图')
    ),
    content: v.pipe(
        v.string(),
        v.nonEmpty("请输入文章内容."),
        v.minLength(32, "文章过短，最少32个字符")
    ),
    tags: v.pipe(
        v.string(),
        v.nonEmpty("请选择标题")
    )
});

export type FormData = v.InferOutput<typeof PlayGroundFormSchema>;

