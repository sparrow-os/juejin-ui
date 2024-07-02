# 如何找mui的name
https://mui.com/material-ui/customization/theme-components/
如下当我们需要定义组件样式时，需要指定组件的Name 
```
const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

```
但组件是有继承依赖关系的
比如TextField 
源码路径如下
```
material-ui/packages/mui-material/src/TextField
```
相关继承依赖关系
```
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/material-ui/api/form-control/)
 * - [InputLabel](/material-ui/api/input-label/)
 * - [FilledInput](/material-ui/api/filled-input/)
 * - [OutlinedInput](/material-ui/api/outlined-input/)
 * - [Input](/material-ui/api/input/)
 * - [FormHelperText](/material-ui/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
```

```
const variantComponent = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput,
};
```
分别对应三个不同的组件，所以名字也不同，这里可以指定具体的组件名称 如

```
const OutlinedInput = React.forwardRef(function OutlinedInput(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiOutlinedInput' });

```
对应的组件名称即为
MuiOutlinedInput
```
MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            border: 'none',
          }...
          }),
        },
      }
```
对应的组件即为
variant="outlined"
```
<TextField
                  error={emailError}
                  helperText={emailErrorMessage}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={emailError ? "error" : "primary"}
                  sx={{ ariaLabel: "email" }}
                />
```



