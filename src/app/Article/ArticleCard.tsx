import React from 'react';

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

const ArticleCard: React.FC<Article> = ({ title, body, category, date, imageUrl, styleType }) => {

    return (
        <>
        <div className="bg-white rounded-3xl shadow-md overflow-hidden" style={{ height: styleType==='fixed'?'438px':'370px', marginTop:styleType==='fixed'?'-30px':'0', width: '376px' }}>
            {styleType === 'fixed' ? (
                <>
                    <div  style={{ height: '438px' }}>
                    <img src={imageUrl} alt={title} className="w-full"/>
                        <div className="p-4">
                            <span className="inline-block px-2 py-1 text-xs font-semibold text-white rounded-full mb-2 bg-blue-500">
                                {category}
                            </span>
                            <h2 className="text-lg font-bold mb-2">{title}</h2>
                            <span className="text-gray-500 text-sm">{date}</span>
                        </div>
                    </div>
                </>
            ) : (
                <div className="relative" style={{height: '370px'}}>
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
                        <span className="inline-block max-w-max px-2 py-1 text-xs font-semibold text-white rounded-full mb-2 bg-blue-500">
                                {category}
                        </span>
                        <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
                        <span className="text-gray-200 text-sm">{date}</span>
                    </div>
                </div>
            )}
        </div>
            </>
    );
};

export default ArticleCard;
