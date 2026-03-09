export interface Offer {
    id: number;
    offer: {
        name: string;
        price: string;
        currency_iso: string;
        currency_symbol: string;
        link: string;
        merchant_link_text: string;
    };
    image: string;
    merchant: {
        name: string;
        logo_url: string;
    };
}