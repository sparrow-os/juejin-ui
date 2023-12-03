'use client'
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form';
import {string, required, object, minLength, maxLength, email, regex} from 'valibot';
import {valibotResolver} from '@hookform/resolvers/valibot';
import {TextField} from "@mui/material";

const USERNAME_REQUIRED_MESSAGE = 'username field is required';
const PASSWORD_REQUIRED_MESSAGE = 'password field is required';

const schema = required(
    object({
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
    }),
);

type FormData = { username: string; password: string, username2: string };

const Page = () => {
    const onSubmit: SubmitHandler<FormData> = (data) => {
        alert(JSON.stringify(data, null, 2));
    }


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver: valibotResolver(schema), // Useful to check TypeScript regressions
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('username')} />

            {errors.username && <span role="alert">{errors.username.message}</span>}
            <br/>
            <input {...register('username2')} />

            {errors.username2 && <span role="alert">{errors.username2.message}</span>}
            <br/>
            <input {...register('password')} />
            {errors.password && <span role="alert">{errors.password.message}</span>}

            <br/>
            {/*<TextField {...register('username2')}*/}
            {/*           error={Boolean(errors.username2)}*/}
            {/*           helperText={errors.username2?.message}*/}
            {/*           fullWidth*/}
            {/*           label="Name"*/}
            {/*           name="name"*/}
            {/*/>*/}
            <button type="submit">submit</button>
        </form>
    );
};
export default Page;