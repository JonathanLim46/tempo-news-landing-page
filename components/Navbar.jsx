"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed left-0 top-0 z-50 w-full h-16 px-5 text-kuning font-bold shadow bg-white">
            <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
                <a href="/" className="text-3xl text-red-500">TEMPO</a>

                <ul className="hidden md:flex ms-6 gap-6">
                    <li className="hover:underline font-normal">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:underline font-normal">
                        <Link href="/daftar-berita">Daftar Berita</Link>
                    </li>
                    <li className="hover:underline font-normal">
                        <Link href="/tentang-kami">Tentang Kami</Link>
                    </li>
                </ul>

                <button
                    className="md:hidden flex flex-col gap-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-40">
                    <ul className="flex flex-col gap-4 py-4 px-5">
                        <li className="hover:underline font-normal">
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li className="hover:underline font-normal">
                            <Link href="/daftar-berita" onClick={() => setIsOpen(false)}>Daftar Berita</Link>
                        </li>
                        <li className="hover:underline font-normal">
                            <Link href="/tentang-kami" onClick={() => setIsOpen(false)}>Tentang Kami</Link>
                        </li>
                    </ul>
                </div>
            )}

        </nav>
    )
}
