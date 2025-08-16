// import axios from "axios";

// export const api = axios.create({
//     baseURL: "http://localhost:3000",
// });

export async function api() {
    const response = await fetch("http://localhost:3000/products");
    return response.json();
}
