import { useState, useMemo, useEffect } from "react";
import { useFetchOffers } from "../../api";
import { OffersTableItem } from "./OffersTableItem";
import { Pagination } from "../Pagination/Pagination";
import { SearchInput } from "../SearchInput/SearchInput";
import { useDebounce } from "../../hooks/useDebounce";
import { Spinner } from "../Spinner/Spinner";

export const OffersTable = () => {
    const { data, isLoading, isError } = useFetchOffers();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSearchQuery = useDebounce(searchQuery, 300);
    const pageSize = 4;

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearchQuery]);

    const filteredOffers = useMemo(() => {
        if (!data) return [];
        if (!debouncedSearchQuery) return data;

        return data.filter((item) =>
            item.offer.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
        );
    }, [data, debouncedSearchQuery]);

    if (isLoading) {
        return (
            <Spinner />
        );
    }

    if (isError) {
        return (
            <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-200/50">
                <div className="rounded-lg bg-red-50 p-6 text-red-800 shadow-sm">
                    <h2 className="text-xl font-bold">Error loading deals</h2>
                    <p>Please try refreshing the page later.</p>
                </div>
            </div>
        );
    }

    const totalItems = filteredOffers.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const currentOffers = filteredOffers.slice(startIndex, startIndex + pageSize);

    return (
        <div>
            <SearchInput value={searchQuery} onChange={setSearchQuery} />

            <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/50">
                <div className="hidden grid-cols-5 bg-slate-700 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white md:grid">
                    <div className="col-span-2 text-white">Product</div>
                    <div className="text-white">Merchant</div>
                    <div className="text-white">Price</div>
                    <div className="text-right text-white">Action</div>
                </div>

                <div className="divide-y divide-slate-100">
                    {currentOffers.length > 0 ? (
                        currentOffers.map((item) => (
                            <OffersTableItem key={item.id} item={item} />
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                            <p className="text-lg font-semibold">No products found</p>
                            <p className="text-sm">Try adjusting your search criteria</p>
                        </div>
                    )}
                </div>
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
};
