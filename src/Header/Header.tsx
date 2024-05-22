"use client"
import {useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import UiSearchIcon from "@/UI/UiSearchIcon";

export function  Header(){
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen);
    };

    const usePathName = usePathname();
    return(
        <>
            <header className="p-4">
                <div className="container mx-auto flex justify-between items-center m-1.5 p-2">
                    <div className="flex-1 text-left">
                        <span className="text-xl font-badScript">Мен жастарға сенемін</span>
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-4xl font-chauPhilomeneOne ">Magzhan.kz</span>
                    </div>
                    <div className="flex-1 text-right">
                        <span className="text-xl font-badScript">Мағжан Жұмабаев</span>
                    </div>
                </div>
                <nav className="bg-gray-100 rounded-3xl h-12 mt-4 p-2 flex items-center">
                    <ul className="flex flex-grow justify-around items-center space-x-4">
                        <li><Link href="/" className="font-ubuntu">Ақпарат</Link></li>
                        <li><Link href="/" className="font-ubuntu">Әдебиеттер</Link></li>
                        <li><Link href="/" className="font-ubuntu">Өнер</Link></li>
                        <li><Link href="/" className="font-ubuntu">Ғылым</Link></li>
                        <li><Link href="/" className="font-ubuntu">Эксклюзив</Link></li>
                        <li><Link href="/" className="font-ubuntu">Карьера</Link></li>
                        <li><Link href="/" className="font-ubuntu">Спорт</Link></li>
                        <li><Link href="/" className="font-ubuntu">Тарих</Link></li>
                    </ul>
                    <div className="flex-shrink-0 ml-4">
                        <UiSearchIcon/>
                    </div>
                </nav>
            </header>
        </>
);
}