import Logo from "../atoms/logo"

const Navbar = (data: any) => {

    const downloadJson = (data: any) => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(data)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "documentation.json";
        document.body.appendChild(element); 
        element.click();
    }

    return (
        <nav className="flex justify-between items-center h-20 px-9 border-b-2 border-b-[#29292E]" role="navigation">
            <Logo />
          
            <div className="flex items-center gap-5">
                <button className="text-white font-mono border-2 border-[#E557D7] px-4 py-2" onClick={() => downloadJson(data)}>Download</button>
            </div>
        </nav>
    )
}

export default Navbar