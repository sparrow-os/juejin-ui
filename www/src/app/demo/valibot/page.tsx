'use client'
import {SubmitHandler, useForm} from 'react-hook-form';
import {valibotResolver} from '@hookform/resolvers/valibot';
import {FormSchema,FormData} from './schema'

const Page = () => {
    const onSubmit: SubmitHandler<FormData> = (data) => {
        alert(JSON.stringify(data, null, 2));
    }
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver: valibotResolver(FormSchema), // Useful to check TypeScript regressions
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