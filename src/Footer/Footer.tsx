import Link from "next/link";

export function Footer(){
    return (
        <footer className="bg-blue-950 text-white py-8">
            <div className="border-b-gray-700 border-t-0 border-r-0 border-l-0 border h-full">
                <ul className="flex w-1/2 justify-center mr-auto ml-auto space-x-4 mb-5">
                    <li><Link href="/" className="font-ubuntu">Ақпарат</Link></li>
                    <li><Link href="/" className="font-ubuntu">Әдебиеттер</Link></li>
                    <li><Link href="/" className="font-ubuntu">Өнер</Link></li>
                    <li><Link href="/" className="font-ubuntu">Ғылым</Link></li>
                    <li><Link href="/" className="font-ubuntu">Эксклюзив</Link></li>
                    <li><Link href="/" className="font-ubuntu">Карьера</Link></li>
                    <li><Link href="/" className="font-ubuntu">Спорт</Link></li>
                    <li><Link href="/" className="font-ubuntu">Тарих</Link></li>
                </ul>
            </div>
            <div className="mt-4 text-center border-b-gray-700 border-t-0 border-r-0 border-l-0 border h-full">
                <p className="text-white text-opacity-60 mb-4">Байлыныс үшін: magzhankz@gmail.com</p>
            </div>
            <div className="mt-4 text-center">
                <p className="text-white text-opacity-60 mb-0.5">Барлық құқықтар сақталған@2024</p>
            </div>
        </footer>
)
}