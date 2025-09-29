import Navbar from "@/components/Navbar";
import Image from "next/image";
import { getTempoNews } from "@/lib/api";
import Footer from "@/components/Footer";

export default async function Home() {
  const news = await getTempoNews();
  const datasBerita = news.slice(0, 3);
  return (
    <div>
      <Navbar />
      <section className="pt-20 min-h-[100dvh] snap-start max-w-7xl mx-auto">
        <div className="mt-40 flex flex-row justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-7xl font-bold">Berita Terkini <br /> <span className="text-red-500">Indonesia</span></p>
            <p className="mt-4 text-2xl">Enak dibaca dan perlu.</p>
          </div>
          <div className="">
            <Image
              src={"/images/bg_image.jpg"}
              width={645}
              height={645}
              alt="Medium Logo"
              className="rounded-lg object-cover z-10"
            />
          </div>
        </div>
      </section>
      <section className="min-h-[100dvh] max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex flex-row gap-7 w-full px-10 py-32 bg-black text-white rounded-lg">
          <div className="">
            <Image
              src={"/images/majalah.png"}
              width={240}
              height={240}
              alt="Medium Logo"
            />
          </div>
          <div>
            <p className="text-red-500 font-bold">Majalah Pekan Ini</p>
            <h2 className="font-bold text-5xl">Sekam Api Reformasi Polri</h2>
            <p className="mt-2 text-2xl">29 September - 5 Oktober 2025</p>
            <p className="mt-4">Listyo Sigit Prabowo membentuk tim reformasi internal kepolisian
              mendahului tim yang dirancang Presiden. Mulai mencuat skenario penggantian
              Kepala Polri. H.70
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-[100dvh] max-w-7xl mx-auto flex flex-col gap-20 items-center justify-center">
        <h2 className="text-6xl font-bold">Berita <span className="text-red-500">Terbaru</span></h2>
        <div className="flex flex-row gap-12">
          {datasBerita.map((item, i) => (
            <div key={i} className="max-w-sm">
              <div className="relative w-full h-60">
                <Image
                  src={"/images/bg_image.jpg"}
                  alt="Medium Logo"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="pt-4 flex flex-col justify-between h-40">
                <h2 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

      </section>
      <Footer />
    </div>
  )
}