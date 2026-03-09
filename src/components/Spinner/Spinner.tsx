export const Spinner = () => {
    return (
        <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-200/50">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-500 border-t-transparent"></div>
        </div>
    );
}