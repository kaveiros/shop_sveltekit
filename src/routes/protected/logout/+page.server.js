import {redirect} from "@sveltejs/kit";

export const actions  = {
    logout: async({cookies}) => {
        cookies.set('user', null,
            {httpOnly: true,
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 0});
        cookies.set('AuthorizationToken', null,
            {httpOnly: true,
                path: '/',
                secure: true,
                sameSite: 'strict',
                maxAge: 0});
        redirect(302, "/")
    }
}