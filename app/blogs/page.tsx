
import React, { Suspense } from 'react'
import LoadingBlogs from './loading';
import Link from 'next/link';

async function getData() {
    const data = await fetch("https://api.vercel.app/blog", {
        cache: "no-store"
        // next: { revalidate: 0 }
    });

    if (!data.ok) throw new Error("Failed to fetch data");

    return data.json();
}


async function BlogList() {
    const todos = await getData();

    return (
        <div>
            {todos.map((item: { id: string; title: string }) => (
                <Link className='block' key={item.id} href={`/blogs/${item.id}`}>
                    {item.title}
                </Link>
            ))}
        </div>
    );
}

export default function BlogPage() {
    return (
        <Suspense fallback={<LoadingBlogs />}>
            <BlogList />
        </Suspense>
    );
}

