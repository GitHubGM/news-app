"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from "@/app/Article/ArticleCard";
import Link from "next/link";
import ArticleCardFirstTwo from "@/app/Article/ArticleCardFirstTwo";

type Article = {
    userId: number;
    id: number;
    title: string;
    body: string;
    category: string;
    date: string;
    imageUrl: string;
    styleType: 'fixed' | 'overlay' | 'first' | 'second';
};

const Article = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const articlesPerPage = 14;

    useEffect(() => {
        const fetchArticlesAndPhotos = async () => {
            try {
                const articlesResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const totalArticles = articlesResponse.data.length;

                const fetchedArticles = articlesResponse.data.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage).map((article: any, index: number) => ({
                    ...article,
                    category: (index % 2 === 0 && index !== 2 && index !== 1) ? 'Ғылым' : 'Өнер',
                    date: '12 қараша 2019',
                    imageUrl: `https://picsum.photos/600/400?random=${index * currentPage}`,
                    styleType: index === 0 ? 'first' : index === 1 ? 'second' : (index % 2 === 0 ? 'fixed' : 'overlay'),
                }));
                setTotalPages(Math.ceil(totalArticles / articlesPerPage));
                setArticles(fetchedArticles);
            } catch (error) {
                console.error('Error fetching articles and photos:', error);
            }
        };

        fetchArticlesAndPhotos();
    }, [currentPage]);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="p-4">
            <div className="first-two-container flex justify-center gap-4">
                {articles.slice(0, 2).map((article) => (
                    <Link key={article.id} href={`/Article/${article.id}`}>
                        <ArticleCardFirstTwo
                            id={article.id}
                            userId={article.userId}
                            title={article.title}
                            body={article.body}
                            category={article.category}
                            date={article.date}
                            imageUrl={article.imageUrl}
                            styleType={article.styleType}
                        />
                    </Link>
                ))}
            </div>
            <div className="masonry">
                {articles.slice(2).map((article) => (
                    <Link key={article.id} href={`/Article/${article.id}`}>
                        <ArticleCard
                            id={article.id}
                            userId={article.userId}
                            title={article.title}
                            body={article.body}
                            category={article.category}
                            date={article.date}
                            imageUrl={article.imageUrl}
                            styleType={article.styleType}
                        />
                    </Link>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 mx-1 font-ubuntu border-0 ${currentPage === index + 1 ? 'underline' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Article;