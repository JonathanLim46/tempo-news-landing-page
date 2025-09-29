export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-8 mt-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm">
                    © {new Date().getFullYear()} Berita Terkini Indonesia
                </p>
                <div className="flex gap-4 text-sm">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
