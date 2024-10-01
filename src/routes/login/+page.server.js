/** @type {import('./$types').Actions}**/
import {fail, redirect} from "@sveltejs/kit";

export const actions  = {
    login: async (event) => {
        const data = await event.request.formData();
        console.log(data)
        const email = data.get('email');
        const password = data.get('password');

        // console.log(email, "--------", password)

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

        // console.log(token, error)
        // console.log(JWT_SECRET)

        event.cookies.set('AuthorizationToken', `Bearer ${token}`, {
            httpOnly: true,
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 // 1 day
        });

        throw redirect(302, '/admin-area');
    }
}