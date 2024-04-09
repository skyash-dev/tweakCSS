"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import React from "react";
import { ReactFlow, MiniMap, Controls, Background } from "reactflow";

import "reactflow/dist/style.css";
import { Button } from "@/components/ui/button";
import Fetch from "@/lib/http";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { createurl, cssurl } from "@/lib/kv";
import Navbar from "@/components/navbar/navbar";

const nodeTypes = { layout: Layout };

export default function Create() {
  const error = (content: string) => {
    alert(content);
  };
  const router = useRouter();
  const [name, setName] = useState("");
  const [colors, setColors] = useState({
    colorPrimary: "#FFF",
    colorSecondary: "#FFF",
    textColor: "#FFF",
    borderColor: "#FFF",
    errorColor: "#FFF",
    warningColor: "#FFF",
  });
  return (
    <div className="h-screen overflow-y-hidden">
      <div className="static h-[60px]">
        <Navbar isLogo={true}></Navbar>
      </div>
      <div className="static h-[40px]">
        <div className="glass px-8 py-2 flex items-center justify-between z-10 app-navbar h-[40px] fixed w-full text-white">
          <span className="font-semibold">Palette Editor</span>
          <div className="flex w-[130px] justify-between">
            <button className="bg-white px-4 py-2 text-xs text-black rounded-md w-[58px] flex justify-center h-[30px] hover:bg-opacity-90">
              CSS
            </button>
            <LinkDialog></LinkDialog>
          </div>
        </div>
      </div>
      <ResizablePanelGroup direction="horizontal" className="text-white">
        <ResizablePanel className="min-h-screen" defaultSize={35}>
          <div className="flex justify-center items-center px-6 overflow-y-scroll scrollbar">
            <div className="properties max-h-[82vh] flex flex-col items-center">
              <div>
                <Input
                  className="text-black my-4"
                  placeholder="Name Your Palette!"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></Input>
              </div>
              {Object.keys(colors).map((keyName, i) => {
                return (
                    <div className="flex items-center" key={i}>
                    <div
                      className="glass px-6 py-2 min-w-48 flex justify-between items-center rounded-md my-2 mx-2"
                      key={i}
                    >
                      <span>{keyName}</span>
                    </div>
                    <TogglePicker
                      id={i}
                      colors={colors}
                      setColors={setColors}
                      keyName={keyName}
                    ></TogglePicker>
                  </div>
                );
              })}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          className="glass max-h-[82vh] flex justify-center items-center overflow-hidden"
          defaultSize={65}
        >
          <ReactFlow
            nodeTypes={nodeTypes}
            fitView
            nodes={[
              {
                id: "0",
                type: "layout",
                data: { value: 0, colors: colors },
                position: { x: 0, y: 0 },
              },
            ]}
          >
            <Controls />
            <Background gap={12} size={1} />
          </ReactFlow>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

const TogglePicker = ({ id, colors, setColors, keyName }: any) => {
  let selectedColor = "";
  const [showPicker, setShowPicker] = useState(false);

  const handleClickClosePanelFromOutside = (e: any) => {
    if (
      e.target.className != "react-colorful__interactive" &&
      e.target.className !=
        "react-colorful__pointer react-colorful__hue-pointer"
    ) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickClosePanelFromOutside);
    return () => {
      document.body.removeEventListener(
        "click",
        handleClickClosePanelFromOutside
      );
    };
  });

  return (
    <div className="">
      <div className=" top-[6px] right-6" key={id}>
        <button
          className="w-12 h-7 rounded-md"
          style={{ backgroundColor: `${colors[keyName]}` }}
          onClick={() => setShowPicker(true)}
        ></button>
      </div>
      <div className=" bg-red-500 absolute ">
        {showPicker ? (
          <HexColorPicker
            className=" absolute left-0"
            color={colors[keyName]}
            onClick={() => {
              setColors({ ...colors, [keyName]: selectedColor });
              setShowPicker(false);
            }}
            onChange={(change) => {
              // console.log(change)
              selectedColor = change;
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
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

function Layout({ data }: any) {
  return (
    <div className="layout text-black">
      {Object.keys(data.colors).map((keyName, index) => {
        return (
          <div
            className={`py-2 px-4 my-6`}
            style={{ backgroundColor: `${data.colors[keyName]}` }}
            key={index}
          >
            {keyName}
          </div>
        );
      })}
    </div>
  );
}


import { Copy } from "lucide-react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"


export function LinkDialog() {

    const [link, setLink] = useState("https://tweak-css.vercel.app/")
    const { toast } = useToast()

  return (
    <Dialog>
      <DialogTrigger asChild>
      <button
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 text-xs text-white rounded-md w-[58px] flex justify-center h-[30px]"
              onClick={async (e) => {
                navigator.clipboard.writeText(link)
                toast({
                    className:'glass text-white',
                    title: "Link Copied Successfully🎉",
                    description: "Paste this link in HTML markup to see the Magic!",
                    duration:1000
                  })
            //     e.preventDefault();
            //     const payload = {
            //       name,
            //       color: colors,
            //     };
            //     const api = new Fetch(payload, createurl);

            //     try {
            //       const res = await api.postAuthjson();
            //       if (res.status) {
            //         alert(`Your CSS URL is: ${cssurl + res.id}`);
            //         // router.push('./');
            //       } else error(res.msg);
            //     } catch (e) {
            //       alert(e);
            //     }
              }}
            >
              Create
            </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-none glass text-white">
        <DialogHeader>
          <DialogTitle className="text-base">🪄 Magic Link</DialogTitle>
          <DialogDescription className="text-sm">
            Paste this link in HTML markup to see the Magic!
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={link}
              readOnly
              className="border-[1px] glass"
            />
          </div>
          <Button type="submit" size="sm" className="px-3 glass" onClick={
            ()=>{
              toast({
                className:'glass text-white',
                title: "Link Copied Successfully🎉",
                description: "Paste this link in HTML markup to see the Magic!",
                duration:1000
              })
            }
          }>
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="bg-purple-600 hover:bg-purple-700 text-white">
              Done
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
