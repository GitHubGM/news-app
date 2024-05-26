"use client";

import React, { useEffect, useState } from 'react';
import {useParams} from 'next/navigation';
import axios from 'axios';
import {UiProfileIcon} from "@/UI/UiProfileIcon";
import {MyComment} from "@/app/Article/MyComment";
import LikeAndShareButtons from "@/LikeAndShare/LikeAndShareButtons";
import {ArticleAboveFooter} from "@/app/Article/ArticleAboveFooter";

type Article = {
    userId: number;
    id: number;
    title: string;
    body: string;
    category: string;
    date: string;
    imageUrl: string;
};

type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

const ArticleDetailClient: React.FC = () => {
    const [article, setArticle] = useState<Article | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [error, setError] = useState<string | null>(null);
    const params = useParams(); // Get the id parameter
    const id = params.id; // Extract the id

    useEffect(() => {
        const fetchArticleAndComments = async () => {
            if (id) {
                try {
                    const [articleResponse, commentsResponse] = await Promise.all([
                        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
                        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
                    ]);

                    const articleData = {
                        ...articleResponse.data,
                        category: 'Science', // Example dynamic category
                        date: '12 қараша 2019',
                        imageUrl: `https://picsum.photos/600/400?random=${id}`, // Use Lorem Picsum for random images
                    };

                    setArticle(articleData);
                    setComments(commentsResponse.data);
                } catch (error) {
                    console.error('Error fetching article and comments:', error);
                    setError('Error fetching data. Please try again later.');
                }
            }
        };

        fetchArticleAndComments();
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 max-w-2xl font-ubuntu mx-auto">
            <h1 className="text-3xl font-ubuntuBold text-blue-950 mb-4">{article.title}</h1>
            <span className="inline-block px-2 py-1 text-xs font-semibold text-white rounded-full mb-4 bg-blue-500">
                {article.category}
            </span><span className="text-gray-500 text-sm ml-5">{article.date}</span>
            <img src={article.imageUrl} alt={article.title} className="w-full h-96 object-cover mb-4"/>
            <p className="text-blue-950 mb-4">{article.body}</p>
            <LikeAndShareButtons/>
            <div className="mt-8">
                <h2 className="text-2xl font-ubuntu mb-4">Пікірлер({comments.length})</h2>
                    <MyComment/>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="flex mb-4 p-4">
                            <UiProfileIcon/>
                            <div className="flex-1 border-b-gray-300 border border-l-0 border-r-0 border-t-0 ml-4">
                            <h3 className="text-xl">{comment.email}</h3>
                            <p className="text-blue-950 text-opacity-70">{comment.body}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No comments available.</p>
                )}
                <textarea className="w-full h-24 border border-gray-300 rounded-2xl bg-gray-50 text-gray-300 p-4 mt-4" placeholder="Пікіріңізді жазыңыз..."/>
                <div className="flex justify-end">
                <button className="bg-blue-900 text-white w-2/5 rounded-3xl  px-4 py-2 mt-4">Қосу</button>
                </div>
            </div>
            <div className="p-4">
            <ArticleAboveFooter/>
            </div>
        </div>
    );
};

export default ArticleDetailClient;