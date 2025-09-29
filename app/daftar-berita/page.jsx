import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default async function DaftarBeritaPage() {
    return (
        <div>
            <Navbar />
            <section className="pt-36 min-h-[100dvh] snap-start max-w-7xl mx-auto">
                <p className="text-4xl font-bold text-center">Seluruh Berita Tempo</p>
            </section>
            <Footer />
        </div>
    )
}