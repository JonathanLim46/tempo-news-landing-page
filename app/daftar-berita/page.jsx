import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTempoNews } from "@/lib/api";
import { NewsList } from "@/components/NewsList";

export default async function DaftarBeritaPage() {
    const news = await getTempoNews()
    return (
        <div>
            <Navbar />
            <section className="pt-36 min-h-[100dvh] snap-start max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center">Seluruh Berita Tempo</h2>
                <NewsList initialItems={news ?? []} />
            </section>
            <Footer />
        </div>
    )
}