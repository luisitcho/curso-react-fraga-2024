import { InputHTMLAttributes } from "react";
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input {...props} className="w-full border-0 h-9 rounded-md outline-none px-2 mb-3 bg-white" />
    )
}