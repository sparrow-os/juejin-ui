import {Drawer, DrawerContent, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import React from "react";
import ImageUploader from "@/components/image-uploader";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

export default function SparrowDrawer() {
    return (
        <Drawer direction={"right"}>
            <DrawerTrigger asChild>
                <Button variant="outline">发布文章</Button>
            </DrawerTrigger>
            <VisuallyHidden><DrawerTitle>`DialogContent` requires a `DialogTitle` for the component to be accessible for screen reader users.

                If you want to hide the `DialogTitle`, you can wrap it with our VisuallyHidden component.</DrawerTitle></VisuallyHidden>

            <DrawerContent draggable={false}
                           className=" inset-[unset] flex flex-col h-full w-[400px] mt-14 fixed top-[1px] right-0">
                <div  className="mx-4 mt-8">

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">文章分类</label>
                        <select className="w-full border-2 rounded-md p-2">
                            <option value="1">前端</option>
                            <option value="2">后端</option>
                            <option value="3">数据库</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">文章标签</label>
                        <input type="text" className="w-full border-2 rounded-md p-2" placeholder="多个标签请用空格分隔" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">专栏</label>
                        <select className="w-full border-2 rounded-md p-2">
                            <option value="1">前端</option>
                            <option value="2">后端</option>
                            <option value="3">数据库</option>
                        </select>
                    </div>

                        <div className="mb-4">

<ImageUploader/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">文章摘要</label>
                        <textarea className="w-full border-2 rounded-md p-2" rows={4} placeholder="请输入文章摘要..."></textarea>
                    </div>

                    <div className="flex justify-end">
                        <Button variant="outline">取消</Button>
                        <Button variant="default">发布</Button>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}