import {BASE_URL} from "$env/static/private";

export async function load(event) {
    let cookie = event.cookies.get("AuthorizationToken")
    console.log("Cookie", cookie)
    let token = cookie.split(" ")[1];
    console.log(token)
    let itemsResponse = await fetch(`${BASE_URL}/list-users`, {
        method: 'GET',
        headers: {"Content-type": "application/json", "Authorization": `Bearer ${token}`}
    });

    return {users: await itemsResponse.json()}
}
