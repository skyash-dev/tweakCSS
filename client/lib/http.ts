export default class Fetch {
  payload: Object | FormData;
  url: string;

  constructor(payload: Object | FormData, url: string) {
    this.payload = payload;
    this.url = url;
  }

  async postJson(): Promise<any> {
    try{
      const res = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(this.payload)
      });
      const jsonRes = await res.json();
  
      return jsonRes;
    }
    catch (e){
      console.log(e);
      
    }
  }

  async postAuthjson() : Promise<any>{
    try{
      const res = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'Authorization': `${localStorage.getItem('TOKEN')}`
        },
        body: JSON.stringify(this.payload)
      });
      const jsonRes = await res.json();
  
      return jsonRes;
    }
    catch(e){
      console.log(e);
      
    }
  }

  async get() : Promise<any>{
    try{
      const res = await fetch(this.url, {
        method: 'GET',
        headers: {
          'Authorization': `${localStorage.getItem('TOKEN')}`
        },
      });
      const jsonRes = await res.json();
  
      return jsonRes;
    }
    catch(e){
      console.log(e)
    }
  }
}