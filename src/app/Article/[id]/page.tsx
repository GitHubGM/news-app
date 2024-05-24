import React from 'react';
import ArticleDetailClient from './ArticleDetailClient';

const ArticleDetail = () => {
    return <ArticleDetailClient />;
};

export default ArticleDetail;

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return posts.map((post: { id: number }) => ({
        id: post.id.toString(),
    }));
}