interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const SearchInput = ({ value, onChange, placeholder = "Search products..." }: SearchInputProps) => {
    return (
        <div className="relative mb-6">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="block w-full rounded-2xl border-none bg-white py-4 pl-11 pr-4 text-slate-900 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 transition-all placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm"
                placeholder={placeholder}
            />
        </div>
    );
};
