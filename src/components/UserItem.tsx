'use client'

export default function UserItem() {
    return <div className="flex items-center justify-between gap-2 border rounded-[8px]  p-2">
        <div className="avatar min-h-10 min-w-10 rounded-full bg-emerald-700 text-white flex items-center justify-center">
            <p>MR</p>
        </div>
        <div className="grow">
            <p className="text-[16px] font-bold ">Masud Rana</p>
            <p className="text-[12px] text-neutral-500 ">masud.cphd@gmail.com</p>
        </div>
    </div>
}
