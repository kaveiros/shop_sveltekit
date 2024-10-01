import {BASE_URL} from "$env/static/private";

export async function load({fetch}) {
    let itemsResponse = await fetch(`${BASE_URL}/list-items`, {
        method: 'GET',
        headers: {"Content-type": "application/json"}
    });

    return {items: await itemsResponse.json()}
}