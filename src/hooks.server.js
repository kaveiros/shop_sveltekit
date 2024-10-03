import {redirect} from "@sveltejs/kit";


export async function handle({event, resolve}) {

    let user = null;
    let allowedPaths = ["/", "/about", "/login"];
    function isPathAllowed(path) {
        return allowedPaths.some(allowedPath =>
            path === allowedPath || path.startsWith(allowedPath + '/')
        );
    }

    if (event.cookies.get('user') !== undefined && event.cookies.get('user') ) {
        user = JSON.parse(event.cookies.get('user'));
    }

    const url = new URL(event.request.url);
    if (!user && !isPathAllowed(url.pathname)) {
        throw redirect(302, '/');
    }

    if(user){
        event.locals.user = user
        if(url.pathname.includes("/admin-area")){
            if (user.role !== "administrator"){
               throw redirect(302, "/")
            }
        }


        // redirect user if he is already logged if he try to access signin or signup
        if(url.pathname.includes('/login')){
            throw redirect(302, '/')
        }
    }


             return await resolve(event)

}