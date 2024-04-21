import {email, maxLength, minLength, object, regex, string, custom, forward} from 'valibot';

/**
 * 注意，这里的formdata formschema 必须与实际页面表单一致
 * 也就是说{...register 必须都要存在，否则不报错，也无法提交}
 */

export type FormData = { userName: string; email: String, password: string, confirmPassword: String, captcha: string };
export const FormSchema = object({
        userName: string("请输入用户名", [
            maxLength(20, "用户名不能超过20位"),
            minLength(6, "用户名至少6位"),
            regex(/^[a-zA-Z0-9_]{6,20}$/,"用户名只能包含字母数字或下划线")
        ]),
        email: string("请输入email", [
            email("请输入正确的email地址"),
            maxLength(20, "用户名不能超过20位"),
            minLength(6, "用户名至少6位")
        ]),
        password: string([
            minLength(8, "请输入至少8位密码"),
            maxLength(20, "密码不要超过20位"),
            regex(/^(?![A-Za-z0-9]+$)(?![a-z0-9\W]+$)(?![A-Za-z\W]+$)(?![A-Z0-9\W]+$)[a-zA-Z0-9\W]{8,}$/, "密码必须是包含大写字母、小写字母、数字、特殊符号的8位以上组合")
        ]),
        confirmPassword: string([
            minLength(8, "请输入至少8位密码"),
            maxLength(20, "密码不要超过20位"),
            regex(/^(?![A-Za-z0-9]+$)(?![a-z0-9\W]+$)(?![A-Za-z\W]+$)(?![A-Z0-9\W]+$)[a-zA-Z0-9\W]{8,}$/, "密码必须是包含大写字母、小写字母、数字、特殊符号的8位以上组合")
        ]),
        captcha: string([
            maxLength(4, "请输入4位验证码"),
            minLength(4, "请输入4位验证码")
        ]),

    },
    // https://valibot.dev/guides/methods/
    [
        forward(
            custom(
                (input) => input.password === input.confirmPassword,
                'The two passwords do not match.'
            ),
            ['confirmPassword']
        ),
    ]
);