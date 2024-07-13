import Image from "next/image"
import Link from "next/link"
import {
    ChevronLeft,
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Upload,
    Users2,
} from "lucide-react"

import {Badge} from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Textarea} from "@/components/ui/textarea"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Header from "@/components/header";

export default function Page() {
    return (
        <>
            <Header/>
            <p className={"flex"}>这里的container 起到居中的作用，与tailwindcss.config配置文件中的center:true或者mx:auto 配合居中</p>
            <div className="container flex flex-row min-h-screen w-10/12 p-2 border border-red-700">
                <aside className="w-44 border rounded-xl bg-background sm:flex">
                    这里是导航
                </aside>
                <main className="flex flex-1 flex-row sm:px-6 sm:py-0 md:gap-4">
                    <div className={"flex border  rounded-xl w-[70%] min-h-screen"}></div>
                    <div className={"flex flex-1 border rounded-xl min-h-screen"}></div>
                </main>
            </div>
        </>
    )
}