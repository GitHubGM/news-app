"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Article = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setArticles(response.data);
        };

        fetchArticles();
    }, []);

    return (
        <div className="p-4">
            {articles.map((article) => (
                <div key={article.id} className="mb-4 p-4 border rounded">
                    <h2 className="text-xl font-bold">{article.title}</h2>
                    <p>{article.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Article;