import * as v from 'valibot';
import { useForm, register,handleSubmit } from'react-hook-form';

const schema = v.object({
    username: v.pipe(
        v.string('username is required'),
        v.minLength(3, 'Needs to be at least 3 characters'),
        v.endsWith('cool', 'Needs to end with `cool`'),
    ),
    password: v.string('password is required'),
});

export default function Page() {
    return (
        <form onSubmit={handleSubmit((d) => console.log(d))}>
            <input {...register('username')} />
            <input type="password" {...register('password')} />
            <input type="submit"/>
        </form>
    );
};