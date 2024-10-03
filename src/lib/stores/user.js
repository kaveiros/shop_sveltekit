import {writable} from "svelte/store";

export const user = writable({
    email: "",
    id: 0,
    role: "",
    isActive: true
})