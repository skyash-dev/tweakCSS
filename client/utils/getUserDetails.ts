import Fetch from "@/lib/http";
import { userdetailsurl } from "../lib/kv";

export const getUserDetails = async()=>{
    const payload = {};
    const api = new Fetch(payload, userdetailsurl);
    const res = await api.get()
    
    if(res.status){
      return res.userDetails;
    }
    else{
      let userDetails = {
        isAuthorized: false
      }
      return userDetails;
    }
  }