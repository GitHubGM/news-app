import React, {useState} from 'react';
import { FaThumbsUp, FaFacebook, FaTwitter, FaVk } from 'react-icons/fa'; // Import icons from react-icons

export function LikeAndShareButtons  () {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(25);

    const handleLikeClick = () => {
        if (liked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setLiked(!liked);
    };

    return (
        <div className="flex justify-between items-center space-x-4 mt-4">
            <button
                onClick={handleLikeClick}
                className={`flex items-center justify-center h-16 w-80 rounded-full px-10 w1/2 py-3 ${liked ? 'bg-blue-950 text-white' : 'bg-gray-100 text-blue-950'}`}
            >
                <FaThumbsUp className="text-lg mr-2" />
                Ұнайды ({count})
            </button>
            <div className="flex items-center justify-center h-16 w-80 rounded-full bg-gray-100 px-10 w-1/2 py-3">
                <a href="https://facebook.com" className="rounded-full p-2">
                    <FaFacebook className="text-blue-950 text-lg" />
                </a>
                <a href="https://twitter.com" className="bg-gray-100 rounded-full p-2">
                    <FaTwitter className="text-blue-950 text-lg" />
                </a>
                <a href="https://vk.com" className="bg-gray-100 rounded-full p-2">
                    <FaVk className="text-blue-950 text-lg" />
                </a>
            </div>
        </div>
    );
};

export default LikeAndShareButtons;
