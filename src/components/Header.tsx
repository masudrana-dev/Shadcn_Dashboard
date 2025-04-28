"use client"

import { BellIcon } from "lucide-react"
import { CommandDemo } from "./Command"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function Header() {
    const [notification, setNotification] = useState<any>([
        {
            text: 'This is a notifications',
            date: '01-02-2025',
            read: true
        },
        {
            text: 'This is a notifications',
            date: '15-02-2025',
            read: false
        }
    ])
    return <div className=" grid grid-cols-2 gap-4 p-4 border-b">
        <CommandDemo />
        <div className="flex items-center justify-end ">

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon" className=" relative cursor-pointer">
                        <div className={` absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notification.find((x: any) => x.read === true) ? "bg-green-500" : 'bg-neutral-50'}`}></div>
                        <BellIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {
                        notification.map((item, key) => <DropdownMenuItem key={key} className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-center gap-2">
                            <div className={`h-3 w-3 rounded-full my-1 ${!item.read ? "bg-green-500" : 'bg-neutral-50'}`}></div>
                            <div>
                                <p>{item.text}</p>
                                <p className="text-xs text-neutral-500">{item.date}</p>
                            </div>
                        </DropdownMenuItem>)
                    }
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    </div>

}
