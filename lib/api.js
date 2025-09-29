const BASE_URL = "https://berita-indo-api.vercel.app/v1/tempo-news";

export async function getTempoNews() {
    try {
        const res = await fetch(BASE_URL, { cache: "no-store" });

        if (!res.ok) {
            throw new Error("Gagal fetch data berita");
        }

        const data = await res.json();

        return data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}