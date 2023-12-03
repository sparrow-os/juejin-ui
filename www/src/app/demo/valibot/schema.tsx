import {email, maxLength, minLength, object, regex, string} from 'valibot';

const USERNAME_REQUIRED_MESSAGE = 'username field is required';
const PASSWORD_REQUIRED_MESSAGE = 'password field is required';

export type FormData = { username: string; password: string, username2: string };
export const FormSchema = object({
    username: string(USERNAME_REQUIRED_MESSAGE, [
        maxLength(7, "user name file is too max"),
        minLength(2, "user name file is too less"),
        email("请输入email")
    ]),
    username2: string(USERNAME_REQUIRED_MESSAGE, [
        maxLength(7, "user name file is too max"),
        minLength(2, "user name file is too less"),
        email("请输入email")
    ]),
    password: string(PASSWORD_REQUIRED_MESSAGE, [
        minLength(2, PASSWORD_REQUIRED_MESSAGE),
        maxLength(7, PASSWORD_REQUIRED_MESSAGE),
        regex(/^[a-zA-Z0-9_]{6,20}$/, "请入正确的密码")
    ]),
});