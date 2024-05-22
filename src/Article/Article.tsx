"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from "@/Article/ArticleCard";

type Article = {
    source: { id: string; name: string };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    styleType: 'fixed' | 'overlay';
};

const Article = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        country: 'us',
                        apiKey: 'ab9e93127204467ba6ef54ee2ab6ff2c',
                    },
                });

                const fetchedArticles = response.data.articles.slice(0, 10).map((article: Article, index: number) => ({
                    ...article,
                    styleType: index % 2 === 0 ? 'fixed' : 'overlay', // Alternate styles
                }));

                setArticles(fetchedArticles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div className="masonry p-4">
            {articles.map((article) => (
                <div key={article.url} className="masonry-item">
                    <ArticleCard
                        title={article.title}
                        body={article.description || article.content}
                        category={article.source.name}
                        date={new Date(article.publishedAt).toLocaleDateString()}
                        imageUrl={article.urlToImage}
                        styleType={article.styleType}
                    />
                </div>
            ))}
        </div>
    );
};

export default Article;