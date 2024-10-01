import jwt from 'jsonwebtoken';
import {JWT_SECRET} from "$env/static/private";


export async function handle({event, resolve}) {
    const { headers } = event.request;
    const cookie = event.cookies.get('AuthorizationToken');

    console.log("Inside hook", event.cookies.get('AuthorizationToken'))

    if (event.request.url === "/admin-area"){

    }

    if (!cookie) {
       // throw new Error("User not found or not logged in");
    }

    try{
        const token = cookie.split(" ")[1];
        console.log("Token : ",token)
        let decoded = jwt.verify(token, JWT_SECRET, null);
        console.log(decoded)
    }catch (e) {
        //throw new Error("Something went wrong")
    }

    return await resolve(event)
}