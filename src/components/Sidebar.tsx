'use client'

import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import UserItem from "./UserItem"
import { Bell, Inbox, Logs, ReceiptText, Settings, ShieldCheck, User } from "lucide-react"

export default function Sidebar() {
    const menuList = [
        {
            group: 'General',
            items: [
                {
                    link: '/',
                    icon: <User />,
                    text: 'Portfolio'
                },
                {
                    link: '/',
                    icon: <Inbox />,
                    text: 'Inbox'
                },
                {
                    link: '/',
                    icon: <ReceiptText />,
                    text: 'Billing'
                },
                {
                    link: '/',
                    icon: <Bell />,
                    text: 'Notification'
                }
            ]
        },
        {
            group: 'Settings',
            items: [
                {
                    link: '/',
                    icon: <Settings />,
                    text: 'General Settings'
                },
                {
                    link: '/',
                    icon: <ShieldCheck />,
                    text: 'Privacy'
                },

                {
                    link: '/',
                    icon: <Logs />,
                    text: 'Logs'
                }
            ]
        }
    ]
    return <div className=" fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen">
        <div><UserItem /></div>
        <div className="grow ">
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    {menuList.map((item, number) => (
                        // <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup key={number} heading={item.group}>
                            {
                                item.items.map((option, optionKey) => <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                                    {option.icon}
                                    {option.text}
                                </CommandItem>)
                            }
                        </CommandGroup>
                    ))}
                </CommandList>
            </Command>
        </div>
        <div> settings</div>
    </div>
}