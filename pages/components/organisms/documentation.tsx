import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import PathGroup  from "../molecules/path-group";

const Path = dynamic(() => import('../molecules/path'), {
    ssr: false
})

const Documentation: React.FC<{text: string}> = ({text = ""}) => {
    const [documentation, setDocumentation] = useState<any>();
    const [expanded, setExpanded] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    
    useEffect(() => {
        try{
            setDocumentation(JSON.parse(text));
            setError("");
        }catch(err){
            setError((err as Error).message);
        }
    }, [text])


    return (
        <div style={{ width: expanded ? '90vw' : '66.7vw'}} className={`absolute  transform-gpu transition ease-in-out duration-300   bg-[#121214] px-12 py-6 h-full text-white font-mono right-0 `}>
            {text.length === 0 && <p className="text-sm text-gray-400 mt-3">Empty</p>}
            {text.length > 0 && error && <div className="bg-red-500 p-3 mb-4 rounded">{error}</div>}
            <div className={`w-20 h-20 bg-[#E557D7] absolute 
            ${expanded ? 'scale-x-[-1]' : 'scale-x-1'}
            left-[-2.5rem] border-8 border-[#121214]
            transform-gpu transition ease-in-out duration-300 
            rounded-full cursor-pointer flex justify-center items-center `} 
            style={{top: "calc(50% - 2.5rem)"}} onClick={() => setExpanded(!expanded)}>
                <Image src="/arrow.png" width={25} height={25} alt="arrow" />
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-white text-xl">{documentation?.title}</h2>
                <span className="opacity-50">{documentation?.version}</span>
            </div>
           <p className="text-sm mt-2">{documentation?.description}</p>
           <div className="mt-5 overflow-auto h-full pb-20">
            {documentation?.paths?.map((path: any, index: number) => (
                <PathGroup key={index} title={path.title} description={path.description}>
                    {path.methods.map((method: any, index: number) => (
                        <Path key={index} path={method.path} description={method.description} method={method.method}>
                            <p className="text-sm text-gray-400 mt-3">Status</p>
                            <span className="bg-green-700 px-4  w-12 flex items-center justify-center rounded-sm mt-1">{method.response.status}</span>
                           { method.request && <>
                            <p className="text-sm text-gray-400 mt-3">Request</p>
                            <pre className="bg-[#1F1F22] p-3 rounded-sm mt-1">
                                <code className="text-sm text-white">
                                    {JSON.stringify(method.request.body, null, 2)}
                                </code>
                            </pre></>}
                            { method.response.body && <div>
                                <p className="text-sm text-gray-400 mt-3">Response</p>
                                <pre className="bg-[#1F1F22] p-3 rounded-sm mt-1">
                                    <code className="text-sm text-white">
                                        {JSON.stringify(method.response.body, null, 2)}
                                    </code>
                                </pre>
                            </div> } 
                        </Path>
                    ))}
                    
                </PathGroup>
            ))}
            
           </div>
           
        </div>
    );
}

export default Documentation;