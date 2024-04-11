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
import { useEffect, useRef, useState } from 'react';
import Fetch from '../../lib/http';
import { useRouter } from 'next/navigation';
import { signupurl } from '../../lib/kv';
import { getUserDetails } from "@/utils/getUserDetails"
import { useToast } from "@/components/ui/use-toast"

export default function SignUp() {
  const {toast} = useToast()
  const router = useRouter();
	const [input, setInput] = useState({
		username: '',
		password: '',
	});

  async function init(){
    try{
      let userDetails:any = await getUserDetails()
        if(userDetails.isAuthorized){
          router.push('/')
          toast({
            className:'glass text-white',
            title: `User already logged in!`,
            duration:1000
          })
        }
      }
      catch(e){
        console.log(e);
        
      }
  }

  useEffect(() => {
		init()
	},[]);

  const error = (content: string) => {
    alert(content);
  }
  const handelInputChange = (e: { target: { name: string, value: string } }): void => {
		setInput({ ...input, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (): Promise<void> => {
		const { username, password } = input;
		const payload = {
			username,
			password,
		};
		const api = new Fetch(payload, signupurl);

		try{
      const res = await api.postJson();
		if (res.status) {
			localStorage.setItem('TOKEN', res.token);
			router.push('./');
		}
		else error(res.msg);
    }
    catch(e){
      console.log(e);
      
    }

	}

  return (
    <div className="h-screen flex justify-center items-center" >
        <Card className="w-[350px] glass text-white">
      <CardHeader>
            <Image src="/tweakCSS.png" width={42} height={42} alt="tweakCSS"></Image>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Create your account and ride tweakCSS.</CardDescription>
      </CardHeader>
      <CardContent>
        <form >
          <div className="grid w-full items-center gap-4" suppressHydrationWarning={true}>
          <div className="flex flex-col space-y-1.5" >
              <Label htmlFor="name">User Name</Label>
              <Input 
              className="text-black" 
              id="name" 
              name="username"
              placeholder="elon_x"
              onChange={handelInputChange}
              />
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input 
              className="text-black" 
              id="password" 
              name="password"
              placeholder="****************"
              onChange={handelInputChange}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="bg-red-500 border-none">Cancel</Button>
        <Button className="glass" onClick={handleSubmit}>Create</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
