import React from "react";

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
const ArticleCardFirstTwo: React.FC<Article> = ({ title, body, category, date, imageUrl, styleType }) => {
    const isFirst = styleType === 'first';

    return (
        <div className={'bg-white rounded-3xl shadow-md overflow-hidden mb-10'} style={{ height: '380px' }}>
            {isFirst ? (
                <div className="p-4" style={{ width: '476px' }}>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-white rounded-full mb-2 bg-blue-500">
                        {category}
                    </span>
                    <h2 className="text-lg font-bold mb-2">{title}</h2>
                    <span className="text-gray-500 text-sm">{date}</span>
                </div>
            ) : (
                <div className="relative" style={{ width: '676px' }}>
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-14 bg-black bg-opacity-50 w-full h-full p-4 flex flex-col justify-end">
                        <span className="inline-block max-w-max px-2 py-1 text-xs font-semibold text-white rounded-full mb-2 bg-blue-500">
                            {category}
                        </span>
                        <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
                        <span className="text-gray-200 text-sm mb-4">{date}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArticleCardFirstTwo;