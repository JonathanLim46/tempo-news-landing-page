"use client";

import * as React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
} from "@/components/ui/pagination";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";

export function NewsList({ initialItems }) {
    const items = Array.isArray(initialItems) ? initialItems : [];

    const [q, setQ] = React.useState("");
    const [size, setSize] = React.useState(10);
    const [page, setPage] = React.useState(1);

    const filtered = React.useMemo(() => {
        const s = q.trim().toLowerCase();
        if (!s) return items;
        return items.filter((n) =>
            (n.title + " " + (n.content ?? "")).toLowerCase().includes(s)
        );
    }, [items, q]);

    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / size));
    const start = (page - 1) * size;
    const pageItems = filtered.slice(start, start + size);

    React.useEffect(() => {
        setPage(1);
    }, [q, size, items.length]);

    const prev = () => setPage((p) => Math.max(1, p - 1));
    const next = () => setPage((p) => Math.min(totalPages, p + 1));

    return (
        <div className="space-y-4 mt-4">
            <div className="flex flex-wrap items-center gap-3">
                <input
                    type="search"
                    placeholder="Cari berita…"
                    className="w-72 rounded-md border px-3 py-2 outline-none focus:ring-2"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
            </div>

            <ul className="grid md:grid-cols-1 gap-3">
                {pageItems.length === 0 && (
                    <li className="text-muted-foreground">Tidak ada berita yang cocok.</li>
                )}
                {pageItems.map((n) => (
                    <li key={n.link ?? n.title} className="border rounded-md p-3">
                        <a
                            href={n.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <h3 className="font-semibold line-clamp-2">{n.title}</h3>
                            {n.isoDate && (
                                <p className="text-xs text-muted-foreground mt-1">
                                    {new Date(n.isoDate).toLocaleString("id-ID", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>
                            )}
                            {n.content && (
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                                    {n.content}
                                </p>
                            )}
                        </a>
                    </li>
                ))}
            </ul>

            {totalPages > 1 && (
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Tampilkan</span>
                        <Select
                            value={String(size)}
                            onValueChange={(v) => setSize(Number(v))}
                        >
                            <SelectTrigger className="w-[90px]">
                                <SelectValue placeholder="10" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        prev();
                                    }}
                                />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        next();
                                    }}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                    <span className="text-sm text-muted-foreground">
                        Halaman {page} / {totalPages}
                    </span>
                </div>
            )}
        </div>
    );
}
