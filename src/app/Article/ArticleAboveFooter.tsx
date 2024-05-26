import React, {useEffect, useState} from "react";
import axios from "axios";
import ArticleCard from "@/app/Article/ArticleCard";
import Link from "next/link";
import {Masonry} from "react-plock";

type Article = {
    userId: number;
    id: number;
    title: string;
    body: string;
    category: string;
    date: string;
    imageUrl: string;
    styleType: 'fixed' | 'overlay';
};
export function ArticleAboveFooter(){
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticlesAndPhotos = async () => {
            try {
                const articlesResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');

                const fetchedArticles = articlesResponse.data.slice(0,6).map((article: any, index: number) => ({
                    ...article,
                    category: index % 2 === 0 ? 'Ғылым' : 'Өнер',
                    date: '12 қараша 2019',
                    imageUrl: `https://picsum.photos/600/400?random=${index}`,
                    styleType: index % 2 === 0 ? 'fixed' : 'overlay',
                }));
                setArticles(fetchedArticles);
            } catch (error) {
                console.error('Error fetching articles and photos:', error);
            }
        };
        fetchArticlesAndPhotos();
    }, []);
    return (
        <>
            <div className="masonry">
                {articles.map((article) => (
                    <Link className='mt-14' key={article.id} href={`/Article/${article.id}`}>
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
        </>
    );
}