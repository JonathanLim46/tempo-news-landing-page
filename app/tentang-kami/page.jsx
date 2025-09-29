import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TentangKamiPage() {
    return (
        <div>
            <Navbar />
            <section className="pt-36 min-h-[100dvh] snap-start max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center">About Us</h2>
            </section>
            <Footer />
        </div>
    )
}