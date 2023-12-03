import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Button, Stack, TextField} from '@mui/material';

const Page = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: '',
            submit: null
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
            name: Yup
                .string()
                .max(255)
                .required('Name is required'),
            password: Yup
                .string()
                .max(255)
                .required('Password is required')
        }),
        onSubmit: async (values, helpers) => {
            try {
                alert(JSON.stringify(values, null, 2));
            } catch (err) {
                helpers.setStatus({success: false});
                helpers.setErrors({submit: err.message});
                helpers.setSubmitting(false);
            }
        }
    });

    return (
        <>
            <div>
                <form
                    noValidate
                    onSubmit={formik.handleSubmit}
                >
                    <Stack spacing={4}>
                        <TextField
                            error={!!(formik.touched.name && formik.errors.name)}
                            fullWidth
                            helperText={formik.touched.name && formik.errors.name}
                            label="Name"
                            name="name"
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            error={!!(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="Email Address"
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="email"
                            value={formik.values.email}
                        />
                        <TextField
                            error={!!(formik.touched.password && formik.errors.password)}
                            fullWidth
                            helperText={formik.touched.password && formik.errors.password}
                            label="Password"
                            name="password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="password"
                            value={formik.values.password}
                        />
                    </Stack>
                    {/*{formik.errors.submit && (*/}
                    {/*    <Typography*/}
                    {/*        color="error"*/}
                    {/*        sx={{mt: 3}}*/}
                    {/*        variant="body2"*/}
                    {/*    >*/}
                    {/*        {formik.errors.submit}*/}
                    {/*    </Typography>*/}
                    {/*)}*/}
                    <Button
                        fullWidth
                        size="large"
                        sx={{mt: 3}}
                        type="submit"
                        variant="contained"
                    >
                        Continue
                    </Button>
                </form>
            </div>
        </>

    );
};

export default Page;
