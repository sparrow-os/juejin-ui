import {email, maxLength, minLength, object, regex, string} from 'valibot';

export type FormData = { username: string; password: string, captcha: string };
export const FormSchema = object({
    username: string("请输入用户名", [
        maxLength(20, "用户名不能超过20位"),
        minLength(6, "用户名至少6位")
    ]),
    password: string([
        minLength(6, "请输入至少6位密码"),
        maxLength(20, "密码不要超过20位"),
        regex(/^[a-zA-Z0-9_]{6,20}$/, "请入正确的密码")
    ]),
    captcha: string([
        maxLength(4, "请输入4位验证码"),
        minLength(4, "请输入4位验证码")
    ]),
});