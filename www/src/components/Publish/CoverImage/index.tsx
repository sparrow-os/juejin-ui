import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import httpClient from "../../../utils/HttpClient";
import toast from "react-hot-toast";
import {useArticleForm} from "../../../store/articleEditor";

const image = {
    url: 'https://img2.baidu.com/it/u=1929941019,3324507395&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    title: '上传封面图',
    width: '40%',
}

const ImageButton = styled("label")(({theme}) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({theme}) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({theme}) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({theme}) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

const VisuallyHiddenInput = styled('input')({
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function CoverImage() {
    const [imageUrl, setImageUrl] = React.useState<string>(image.url);
    const articleForm = useArticleForm((articleForm) => articleForm);


    const handleFileChange = (event: any) => {

        //浏览器对于文件上传默认会将文件拆分，分多次http请求服务器，
        //如果想要一次上传所有的文件，需要借助FormData对象，
        //同时此对象可以添加其他的参数，
        const formData = new FormData();
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        httpClient.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            articleForm.setCoverImage("https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF");
            setImageUrl("https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF");
            toast.success('上传成功');
        }).catch(error => {
            toast.error('上传失败');
        });
    };


    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', m: 1}}>
            <ImageButton role="button"
                         key={image.title}
                         style={{
                             width: image.width,
                             height: 200
                         }}
            >
                <VisuallyHiddenInput type="file" onChange={handleFileChange}/>
                <ImageSrc style={{backgroundImage: `url(${imageUrl})`}}/>
                <ImageBackdrop className="MuiImageBackdrop-root"/>
                <Image>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                    >
                        {image.title}
                        <ImageMarked className="MuiImageMarked-root"/>
                    </Typography>
                </Image>
            </ImageButton>
        </Box>
    );
}