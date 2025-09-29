import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="fixed left-0 top-0  z-50 w-full h-16 py-9 px-5 text-kuning font-bold shadow bg-white">
            <div className="flex max-w-7xl mx-auto items-center h-full">
                <a href="" className="text-4xl text-red-500">TEMPO</a>
                <ul className="hidden md:flex ms-6 gap-6">
                    <li className="hover:underline font-normal">
                        <a href="#services" className="className=">Home</a>
                    </li>
                    <li className="hover:underline font-normal">
                        <Link href="/daftar-berita">Daftar Berita</Link>
                    </li>
                    <li className="hover:underline font-normal">
                        <Link href="/tentang-kami">Tentang Kami</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}