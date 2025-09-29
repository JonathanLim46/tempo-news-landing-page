import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function TentangKamiPage() {
    return (
        <div>
            <Navbar />
            <section className="pt-40 min-h-[100dvh] snap-start max-w-7xl mx-auto">
                <h2 className="text-center font-bold text-6xl">Tentang Kami</h2>
                <div className="mt-12 flex flex-col">
                    <div className="flex flex-col align">
                        <div className="flex justify-center">
                            <Image
                                src={"/images/tempo-about.png"}
                                width={645}
                                height={645}
                                alt="Medium Logo"
                                className="rounded-lg object-cover z-10"
                            />
                        </div>
                        <p className="mt-12 text-7xl font-bold text-red-500">TEMPO</p>
                        <p className="mt-4">Tempo hadir sebagai lembaga pers yang berkomitmen menjaga integritas
                            dan kebenaran—dengan jurnalisme yang tajam, mendalam, dan berpihak
                            pada kepentingan publik.</p>
                        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                            <div>
                                <h3 className="text-xs text-gray-500">Tahun berkiprah</h3>
                                <p className="text-2xl font-bold">50+</p>
                            </div>
                            <div>
                                <h3 className="text-xs text-gray-500">Liputan Investigasi</h3>
                                <p className="text-2xl font-bold">Ratusan Fakta</p>
                            </div>
                            <div>
                                <h3 className="text-xs text-gray-500">Platform</h3>
                                <p className="text-2xl font-bold">Multiplatform</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-20 min-h-[100dvh] snap-start max-w-7xl mx-auto">
                <div className="mt-40 grid grid-cols-2 justify-between">
                    <div className="flex flex-col justify-center">
                        <p className="text-7xl font-bold">VISI <span className="text-red-500">TEMPO</span></p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p>Menjadi lembaga pers independen yang terpercaya, tajam, dan berpihak pada kepentingan publik, serta menjadi rujukan utama masyarakat dalam memperoleh informasi yang akurat, kritis, dan berintegritas.</p>
                    </div>
                </div>
                <ContactForm />
            </section>

            <Footer />
        </div>
    )
}