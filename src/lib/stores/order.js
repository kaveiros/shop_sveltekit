import {writable} from "svelte/store";

export const order = writable({
    userId: 0,
    orderDate: "",
    products:[]
});