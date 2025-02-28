import React, { Suspense } from 'react'
import LoadingBlogDetails from './loading';
import Image from 'next/image';

const getBlogDetails = async (slug: string) => {
    const blogsUrl = `${process.env.NEXT_PUBLIC_API_URL!}/product/${slug}`;

    const response = await fetch(blogsUrl, {
        cache: "no-store"
    })
    const data = await response.json();
    return data.data.Advert
}
export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const blog = await getBlogDetails(slug);

    return (
        <Suspense fallback={<LoadingBlogDetails />}>
            <div>
                <Image
                    src={blog.thumbnail}
                    alt={`${blog.thumbnail}`}
                    priority
                    height={250}
                    width={250}
                    sizes="(max-width: 768px) 768, 100vw"
                    fetchPriority="high"
                    className="  h-[250px] w-[250px]  "
                    id="mainImage"
                    loading="eager"
                />
                <h1>Title: {blog.title}</h1>
                <p>Category: {blog.category}</p>
                <p>ID: {blog.id}</p>

            </div>
        </Suspense>
    )
}
