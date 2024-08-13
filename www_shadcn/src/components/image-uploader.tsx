import Dropzone from "react-dropzone-uploader";
import {Upload} from "lucide-react";
import React, {useRef} from "react";

const Input = ({accept}: { accept: string }) => {
    const coverLabelRef=useRef<HTMLLabelElement>(null);
    const getFilesFromEvent = (
        event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>,
    ): Promise<File[]> => {
        return new Promise<File[]>(resolve => {
            let items = null
            if ('dataTransfer' in event) {
                const dt = event.dataTransfer
                console.log("drage");
                // NOTE: Only the 'drop' event has access to DataTransfer.files, otherwise it will always be empty
                if ('files' in dt && dt.files.length) {
                    items = dt.files
                } else if (dt.items && dt.items.length) {
                    items = dt.items
                }
            } else if (event.target && event.target.files) {
                items = event.target.files
            }
            if(coverLabelRef.current) {
                coverLabelRef.current.style.backgroundImage = "url('/brand/sparrow1.jpg')"
            }
            console.log(items);
            return Array.prototype.slice.call(items)
        })
    }

    return (
        <label ref={coverLabelRef}
            className={"bg-[url('/cover.svg')] bg-center flex items-center justify-center aspect-video  w-240 border border-stone-700  rounded-xl cursor-pointer relative"}>
            <label
                className={" w-16 h-16 rounded-xl flex items-center justify-center z-20 text-white bg-stone-700 cursor-pointer border border-stone-700  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-90"}>
                <Upload className="h-4 w-4 z-10 text-muted-foreground"/>
                <input
                    style={{display: 'none'}}
                    type="file"
                    accept={accept}
                    onChange={e => {
                        getFilesFromEvent(e);
                    }}
                />
            </label>
        </label>
    )
}

export default function ImageUploader() {
    return (
        <Dropzone
            accept="image/*,audio/*,video/*,.pdf"
            getUploadParams={() => ({url: 'https://httpbin.org/post'})}
            InputComponent={Input}
        />
    )
}