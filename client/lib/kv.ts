export const BASE_URI = `http://localhost:3001/api`

export const signupurl: string = `${BASE_URI}/auth/signup`;
export const loginurl: string = `${BASE_URI}/auth/login`;
export const userdetailsurl: string = `${BASE_URI}/auth/userdetails`;

export const createurl: string = `${BASE_URI}/colorpalette/createpalette`;
export const cssurl: string = `${BASE_URI}/colorpalette/`;
export const getallpalettesurl: string = `${BASE_URI}/colorpalette/getallpalettes`;



export let TOKEN: string;
export let USERNAME: string;

export function loadSecrets() {
  const token = localStorage.getItem('TOKEN');
  const username = localStorage.getItem('USERNAME');
  if (!token || !username) {
    return null
  }

  TOKEN = token;
  USERNAME = username;

  console.log('Exposing Secrets:', TOKEN, USERNAME);
}