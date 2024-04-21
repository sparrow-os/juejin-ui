import {maxLength, minLength, object, regex, string} from 'valibot';

export type FormData = { userName: string; password: string, captcha: string };
export const FormSchema = object({
    userName: string("请输入用户名", [
        maxLength(20, "用户名不能超过20位"),
        minLength(6, "用户名至少6位")
    ]),
    password: string([
        minLength(6, "请输入至少6位密码"),
        maxLength(20, "密码不要超过20位"),
        regex(/^(?![A-Za-z0-9]+$)(?![a-z0-9\W]+$)(?![A-Za-z\W]+$)(?![A-Z0-9\W]+$)[a-zA-Z0-9\W]{8,}$/, "密码必须是包含大写字母、小写字母、数字、特殊符号的8位以上组合")
    ]),
    captcha: string([
        maxLength(4, "请输入4位验证码"),
        minLength(4, "请输入4位验证码")
    ]),
});