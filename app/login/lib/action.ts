'use server'
import { redirect } from "next/navigation";

export async function login(error: Record<string, string>, formData: FormData) {
    const data = Object.fromEntries(formData)
    if (!data.email) {
        return { error: "Email is required" }
    }
    redirect("/about")

}
