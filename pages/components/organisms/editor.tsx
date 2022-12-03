import { doc } from "../../doc"

const Editor: React.FC<{text: string, handleText: (text: string) => void}> = ({text, handleText}) => {
  
    return (
        <div className="editor h-full w-full ">
            <textarea
                value={text}
                onChange={(e) => handleText(e.target.value)}
                className="w-1/3 h-full outline-none resize-none scrollbar-hide
                font-mono bg-[#121214] p-5 text-white
                caret-[#E557D7] border-r-[#29292E] border-r-2"
                placeholder="Write your json here 😎">
            </textarea>
        </div>
    )
}

export default Editor