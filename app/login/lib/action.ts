'use server'
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
    formData.get("email")
    formData.get("password")
    redirect("/about")

}
