import type { Offer } from "../../types";

interface OffersTableItemProps {
    item: Offer;
}

export const OffersTableItem = ({ item }: OffersTableItemProps) => {
    const decodeHtml = (html: string) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };

    return (
        <div className="group grid grid-cols-2 items-center gap-4 px-6 py-6 transition-all hover:bg-green-50 md:grid-cols-5 md:gap-6">
            {/* Product Info */}
            <div className="col-span-2 flex items-center gap-4 md:col-span-2">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100 transition-transform group-hover:scale-105">
                    {item.image ? (
                        <img
                            src={item.image}
                            alt={item.offer.name}
                            className="h-full w-full object-cover rounded-lg mix-blend-multiply"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">No Image</div>
                    )}
                </div>
                <h3 className="text-base font-bold leading-snug text-slate-800 group-hover:text-green-700">
                    {item.offer.name}
                </h3>
            </div>

            {/* Merchant */}
            <div className="flex items-center gap-3">
                <div className="h-8 w-16 overflow-hidden rounded bg-white p-1 shadow-sm ring-1 ring-slate-200">
                    {item.merchant.logo_url ? (
                        <img
                            src={item.merchant.logo_url}
                            alt={item.merchant.name}
                            className="h-full w-full object-contain"
                        />
                    ) : (
                        <span className="text-xs font-semibold text-slate-600">{item.merchant.name}</span>
                    )}
                </div>
                <span className="text-sm font-medium text-slate-600 md:hidden">{item.merchant.name}</span>
            </div>

            {/* Price */}
            <div className="text-right md:text-left">
                <div className="text-2xl font-black text-slate-900">
                    {decodeHtml(item.offer.currency_symbol)}{item.offer.price}
                </div>
            </div>

            {/* Action */}
            <div className="col-span-2 text-right md:col-span-1">
                <a
                    href={item.offer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-100 transition-all hover:bg-green-700 hover:shadow-green-200 group-hover:-translate-y-0.5 md:w-auto"
                >
                    View Deal
                </a>
            </div>
        </div>
    );
};