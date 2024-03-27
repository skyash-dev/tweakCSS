"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image  from "next/image"

export default function Login() {
  return (
    <div className="bg-black h-screen flex justify-center items-center" >
        <Card className="w-[350px] bg-black glass text-white">
      <CardHeader>
            <Image src="/tweakCSS.png" width={42} height={42} alt="tweakCSS"></Image>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login and ride tweakCSS.</CardDescription>
      </CardHeader>
      <CardContent>
        <form >
          <div className="grid w-full items-center gap-4" suppressHydrationWarning={true}>
            <div className="flex flex-col space-y-1.5" >
              <Label htmlFor="name">Email</Label>
              <Input className="text-black" id="name" placeholder="elon@x"/>
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input className="text-black" id="password" placeholder="****************" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="bg-red-500 border-none">Cancel</Button>
        <Button className="glass">Create</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
