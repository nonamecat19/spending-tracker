import {
    AlignJustify,
    LogOut,
    User,
    Wallet,
} from "lucide-react"

import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription, SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {FC, ReactNode} from "react";
import Link from "next/link";

interface Props {
    children: ReactNode
}

const TrackerLayout: FC<Props> = ({children}) => {
    return (
        <main>
            <nav className='flex justify-between p-2 border-b-2 border-primary'>
                <div className='flex'>
                    <Wallet
                        size={40}
                        color='white'
                        className='rounded-l-md ml-1 bg-primary p-2'
                    />
                    <div className='rounded-r-md bg-primary py-2 pr-2 text-white font-bold'>
                        Spending tracker
                    </div>
                </div>
                <MobileNavbar/>
                <DesktopNavbar/>
            </nav>
            {children}
        </main>
    )
}

const MobileNavbar = () => {
    return (
        <div className='flex md:hidden'>
            <Sheet>
                <SheetTrigger>
                    <AlignJustify
                        size={40}
                        color='white'
                        className='rounded-md ml-1 bg-primary p-2'
                    />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

const DesktopDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <AlignJustify
                    size={40}
                    color='white'
                    className='rounded-md ml-1 bg-primary p-2'
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Spending tracker</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4"/>
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuItem className='bg-[#E11D4830]'>
                    <LogOut className="mr-2 h-4 w-4"/>
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const DesktopNavbar = () => {
    return (
        <div className='hidden md:flex gap-1'>
            <div className='flex gap-2'>
                <Link href={'/tracker/home'}>
                    <Button>
                        Home
                    </Button>
                </Link>
                <Link href={'/tracker/history'}>
                    <Button>
                        History
                    </Button>
                </Link>
                <Link href={'/tracker/stats'}>
                    <Button>
                        Stats
                    </Button>
                </Link>
            </div>
            <DesktopDropdown/>
        </div>
    )
}

export default TrackerLayout