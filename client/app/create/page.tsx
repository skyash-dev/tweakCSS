"use client"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import React from 'react';
import {ReactFlow, MiniMap,
    Controls,
    Background,} from 'reactflow';
 
import 'reactflow/dist/style.css';
import Layout from "@/components/ui/Layout";

const nodeTypes = { layout: Layout };

export default function Create() {
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
            <ResizablePanel className="min-h-screen flex justify-center items-center">
                <div className="properties max-h-screen scrollbar">
                    {
                        Object.keys(colors).map((keyName, i) => {
                            return (
                                <div className="glass px-6 py-2 min-w-72 flex justify-between items-center rounded-md my-6" key={i}>
                                <span>{keyName}</span>
                                <TogglePicker id={i} colors={colors} setColors={setColors} keyName={keyName}></TogglePicker>
                            </div>
                            )
                        })
                    }

                    <div>
                    </div>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="glass min-h-screen flex justify-center items-center">
                <ReactFlow nodeTypes={nodeTypes} fitView nodes={[{id: '0', type:'layout',
    data: { value:0 },
    position: { x: 0, y: 0 },}]}>
                <Controls />
        <Background gap={12} size={1} />
                </ReactFlow>
            </ResizablePanel>
        </ResizablePanelGroup>

    )
}

const TogglePicker = ({ id, colors, setColors, keyName }: any) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);
    
    
    const handleClickClosePanelFromOutside = (e: any) => {
        if (e.target.className != "react-colorful__interactive" && e.target.className != "react-colorful__pointer react-colorful__hue-pointer") {
            setToggleThisElement(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener("click", handleClickClosePanelFromOutside)
        return () => {
            document.body.removeEventListener("click", handleClickClosePanelFromOutside)
        }
    })

    return (
        <>
            <div className="absolute top-[6px] right-6" key={id}>
                <button
                    className="w-12 h-7 rounded-md"
                    style={{backgroundColor: `${colors[keyName]}`}}
                    onClick={() => setToggleThisElement((prev) => !prev)}
                >

                </button>

            </div>
            <div className="absolute left-60 bottom-12 z-10">{toggleThisElement && <HexColorPicker className=" absolute left-0 " color={colors[keyName]} onChange={(change)=>{
                setColors({...colors, [keyName]: change})
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
                
            }}/>}</div>
        </>
    );
};