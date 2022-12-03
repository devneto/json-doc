import  Documentation  from "../organisms/documentation"
import  Editor  from "../organisms/editor"

 const Conversor: React.FC<{text: string, handleText: (text: string) => void}> = ({text, handleText}) => {
    return (
        <div className="h-full flex relative">
            <Editor handleText={handleText} text={text}/>
            <Documentation text={text}/>
        </div>
    )
}

export default Conversor;