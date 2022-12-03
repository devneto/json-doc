import Image from "next/image";
import React, { useState } from "react";

const getColorByMehod = (method: string) => {
    switch (method) {
        case "GET":
            return "bg-green-500";
        case "POST":
            return "bg-blue-500";
        case "PUT":
            return "bg-yellow-500";
        case "DELETE":
            return "bg-red-500";
        default:
            return "bg-gray-500";
    }
}

const Path: React.FC<{children: React.ReactNode, path: string, description: string, method: string}> = ({children, path, description, method}) => {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="cursor-pointer border-[1px] border-[#29292E] p-2 pr-[1.2rem]">
            <div className="flex items-center justify-between" onClick={() => setOpen(!open)}>
                <div className="flex items-center gap-3">
                    <div className={`${getColorByMehod(method)} font-mono py-1 px-3`}>{method?.toUpperCase()}</div>
                    <h2 className="text-white text-md">{path} <span className="opacity-50 text-sm">{description}</span></h2>
                </div>
                <div className={`transform-gpu scale-y-[${open ? '-1' : '1'}] transition ease-in-out duration-300 opacity-50`}>
                    <Image src="/arrow-down.png" alt="arrow-down-2" width={15} height={18}/>
                </div>
            </div>
            <div className={`mt-3 ${!open && 'hidden'}`}>
                {children}
            </div>
        </div>
            
    );
}

export default Path;