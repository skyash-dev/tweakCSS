export const BASE_URI = `http://localhost:3001/api`

export const signupurl: string = `${BASE_URI}/auth/signup`;
export const loginurl: string = `${BASE_URI}/auth/login`;



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