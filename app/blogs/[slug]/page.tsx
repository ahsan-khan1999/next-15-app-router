import React, { Suspense } from 'react'
import LoadingBlogDetails from './loading';

const getBlogDetails = async (slug: string) => {
    const response = await fetch("https://api.vercel.app/blog/" + slug, {
        cache: "no-store"
    })
    const data = await response.json();
    return data
}
export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const blog = await getBlogDetails(slug)
    return (
        <Suspense fallback={<LoadingBlogDetails />}>
            <div>
                <h1>Title: {blog.title}</h1>
                <p>Authur: {blog.title}</p>
                <p>Category: {blog.category}</p>
                <p>Content: {blog.content}</p>
                <p>ID: {blog.id}</p>

            </div>
        </Suspense>
    )
}
