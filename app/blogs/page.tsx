
import React, { Suspense } from 'react'
// import LoadingBlogs from './_loading';
import Link from 'next/link';
import Image from 'next/image';
import LoadingBlogs from './loading';

async function getData() {
    const blogsUrl = `${process.env.NEXT_PUBLIC_API_URL!}/product?size=50`;

    const data = await fetch(blogsUrl, {
        cache: "no-store"
        // next: { revalidate: 0 }
    });

    if (!data.ok) throw new Error("Failed to fetch data");
    const blogs = await data.json()
    return blogs.data.Adverts
}


async function BlogList() {
    const blogs = await getData();

    return (
        <div className='flex space-x-5'>
            {blogs.map((item: { id: string; title: string, thumbnail: string }) => (
                <div className='flex flex-col-reverse space-x-3' key={item.id}>
                    <Image
                        src={item.thumbnail}
                        alt={`${item.thumbnail}`}
                        priority
                        height={250}
                        width={250}
                        sizes="(max-width: 768px) 768, 100vw"
                        // fetchPriority="high"
                        className="  h-[250px] w-[250px]  "
                        id="mainImage"
                        loading="eager"
                    />
                    <Link className='block' href={`/blogs/${item.id}`}>
                        {item.title}
                    </Link>
                </div>
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

