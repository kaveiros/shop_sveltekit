/** @type {import('./$types').Actions}**/
import {fail, redirect} from "@sveltejs/kit";
import {user} from "$lib/stores/user.js";
import {decodeToken} from "$lib/utils/tokenUtils.js";

export const actions  = {
    login: async (event) => {
        const data = await event.request.formData();
        console.log(data)
        const email = data.get('email');
        const password = data.get('password');
        if (
            typeof email !== 'string' ||
            typeof password !== 'string' ||
            !email ||
            !password
        ) {
            return fail(400, {
                error: "Password or username are invalid"
            })
        }
        let response = await fetch("http://localhost:5194/login",{
            method: 'POST',
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify({
                "Email": email,
                "Passwd": password
            })
        })

        const {token, error} = await response.json()
        if (error) {
            return fail(401, {
                error
            });
        }

        const decoded = decodeToken(token);
            console.log(decoded)
        const obj = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role,
            isActive: decoded.isActive
        }
        user.set(obj)

        event.cookies.set('AuthorizationToken', `Bearer ${token}`, {
            httpOnly: true,
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 // 1 day
        });
        event.cookies.set('user', JSON.stringify(obj), {
            httpOnly: true,
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 // 1 day
        });


        throw redirect(302, '/');
    }
}