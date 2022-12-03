import Image from "next/image";
import React, { useState } from "react";

const PathGroup: React.FC<{children: React.ReactNode, title: string, description: string}> = ({children, title, description}) => {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="cursor-pointer border-[1px] border-[#29292E] ">
            <div className="flex items-center justify-between p-4" onClick={() => setOpen(!open)}>
                <h2 className="text-white text-md">Users <span className="opacity-50 text-sm">Everything about your Users</span></h2>
                <div className={`transform-gpu scale-y-[${open ? '-1' : '1'}] transition ease-in-out duration-300`}>
                    <img src="/arrow-down.png" alt="arrow-down" width={20} height={20}/>
                </div>
            </div>
            <div className={` ${!open && 'hidden'}`}>
                {children}
            </div>
        </div>
            
    );
}

export default PathGroup;