interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
        <div className="mt-8 flex items-center justify-center gap-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 transition-all hover:bg-green-50 hover:text-green-700 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-slate-600"
            >
                Previous
            </button>

            <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition-all ${currentPage === page
                                ? "bg-green-600 text-white shadow-lg shadow-green-100"
                                : "bg-white text-slate-600 hover:bg-green-50 hover:text-green-700"
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 transition-all hover:bg-green-50 hover:text-green-700 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-slate-600"
            >
                Next
            </button>
        </div>
    );
};
