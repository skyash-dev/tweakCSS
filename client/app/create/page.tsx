"use client"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import React from 'react';
import {
    ReactFlow, MiniMap,
    Controls,
    Background,
} from 'reactflow';

import 'reactflow/dist/style.css';
import { Button } from "@/components/ui/button";
import Fetch from "@/lib/http";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { createurl, cssurl } from "@/lib/kv";

const nodeTypes = { layout: Layout };

export default function Create() {
    const error = (content: string) => {
        alert(content);
      }
    const router = useRouter();
    const [name, setName] = useState("")
    const [colors, setColors] = useState({
        colorPrimary: "#FFF",
        colorSecondary: "#FFF",
        textColor: "#FFF",
        borderColor: "#FFF",
        errorColor: "#FFF",
        warningColor: "#FFF"
    })
    return (
        <ResizablePanelGroup direction="horizontal" className="text-white">
            <ResizablePanel className="min-h-screen flex px-6 justify-center">
                <div className="properties max-h-screen scrollbar flex flex-col items-center">
                    <div>
                        <Input className="text-black my-4" placeholder="Name Your Palette!" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}></Input>
                    </div>
                    {
                        Object.keys(colors).map((keyName, i) => {
                            return (
                                <div className="flex items-center" key={i}>
                                <div className="glass px-6 py-2 min-w-48 flex justify-between items-center rounded-md my-2 mx-2" key={i}>
                                    <span>{keyName}</span>
                                </div>
                                    <TogglePicker id={i} colors={colors} setColors={setColors} keyName={keyName}></TogglePicker>
                                    </div>
                            )
                        })
                    }

                    <div className="w-11/12 flex justify-center">
                        <Button className="bg-white text-black my-4 hover:text-white" onClick={async(e) => {
                            e.preventDefault()
                            const payload = {
                                name,
                                color: colors
                            };
                            const api = new Fetch(payload, createurl);

                            try {
                                const res = await api.postAuthjson();
                                if (res.status) {
                                        alert(`Your CSS URL is: ${cssurl+res.id}`)
                                    // router.push('./');
                                }
                                else error(res.msg);
                            }
                            catch (e) {
                                alert(e)
                            }

                        }}>Create Palette</Button>
                        
                    </div>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="glass min-h-screen flex justify-center items-center">
                <ReactFlow nodeTypes={nodeTypes} fitView nodes={[{
                    id: '0', type: 'layout',
                    data: { value: 0, colors: colors },
                    position: { x: 0, y: 0 },
                }]}>
                    <Controls />
                    <Background gap={12} size={1} />
                </ReactFlow>
            </ResizablePanel>
        </ResizablePanelGroup>

    )
}

const TogglePicker = ({ id, colors, setColors, keyName }: any) => {
    let selectedColor = ""
    const [showPicker, setShowPicker] = useState(false);


    const handleClickClosePanelFromOutside = (e: any) => {
        if (e.target.className != "react-colorful__interactive" && e.target.className != "react-colorful__pointer react-colorful__hue-pointer") {
            setShowPicker(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener("click", handleClickClosePanelFromOutside)
        return () => {
            document.body.removeEventListener("click", handleClickClosePanelFromOutside)
        }
    })

    return (
        <div className="">
            <div className=" top-[6px] right-6" key={id}>
                <button
                    className="w-12 h-7 rounded-md"
                    style={{ backgroundColor: `${colors[keyName]}` }}
                    onClick={() => setShowPicker(true)}
                >

                </button>

            </div>
            <div className=" bg-red-500 absolute ">{showPicker ? <HexColorPicker className=" absolute left-0" color={colors[keyName]} onClick={() => {
                setColors({ ...colors, [keyName]: selectedColor })
                setShowPicker(false)
            }} onChange={(change) => {
                // console.log(change)
                selectedColor = change
                // let newColors={}
                // Object.keys(colors).map((key)=>{
                //     if(key==keyName){
                //         newColors = {...newColors, [key]: change}
                //     }
                //     else{
                //         newColors = {...newColors, [key]: colors[key]}
                //     }
                // })
                // setColors(newColors)

            }} />:null}</div>
        </div>
    );
};

function Layout({ data }: any) {
    return (
        <div className="layout text-black">
            {
                Object.keys(data.colors).map((keyName, index) => {
                    return (
                        <div className={`py-2 px-4 my-6`} style={{ backgroundColor: `${data.colors[keyName]}` }} key={index}>{keyName}</div>
                    )
                })
            }
        </div>
    );
}