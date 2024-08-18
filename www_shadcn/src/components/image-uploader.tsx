import {Upload} from "lucide-react";
import React from "react";
import {InputProps} from "@/components/ui/input";
import {useDropzone} from "react-dropzone";

const ImageUploader = React.forwardRef<HTMLLabelElement, InputProps>(
    ({accept, type, ...props}, ref) => {
        const onDrop = (acceptedFiles: File[]) => {
            console.log(acceptedFiles);
            const sparrowCoverImage = document.getElementById("sparrow-cover-label");
            if (sparrowCoverImage) {
                sparrowCoverImage.style.backgroundImage = `url(${URL.createObjectURL(acceptedFiles[0])})`;
            }
        };
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
        const rootProps = getRootProps();
        const inputProps = getInputProps();
        return (
            <>
                <label id={"sparrow-cover-label"} {...rootProps} ref={ref}
                       className={"bg-[url('/cover.svg')] bg-center flex items-center justify-center aspect-video  w-240 border border-stone-700  rounded-xl cursor-pointer relative"}>
                    <div
                        className={" w-16 h-16 rounded-xl flex items-center justify-center z-10 text-white bg-stone-700 cursor-pointer border border-stone-700"}>
                        <Upload className="h-4 w-4 z-10 text-muted-foreground"/>
                    </div>
                </label>
                <input {...inputProps}
                       style={{display: 'none'}}
                       type="file"
                       onChange={e => {
                           console.log(e.target.files)
                       }}
                />
            </>
        )
    }
)
ImageUploader.displayName = "ImageUploader"
export default ImageUploader

