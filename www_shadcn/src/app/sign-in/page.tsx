import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ModeToggle } from '@/components/mode-toggle'

export default function Page() {
    return (
        <div className="w-full text-left">
            <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-balance text-muted-foreground">
                                输入邮箱和密码
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="****@163.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        忘记密码?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full">
                                登录
                            </Button>
                            <Button variant="outline" className="w-full">
                                Login with wechat
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            还没有帐号?{' '}
                            <Link href="/sign-up" className="underline">
                                注册
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden min-h-screen bg-muted lg:block">
                    <Image
                        src="/brand/sparrow2.jpg"
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="h-full w-full object-cover dark:brightness-[0.8] dark:grayscale"
                    />
                </div>
            </div>
        </div>
    )
}
