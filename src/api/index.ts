import { useQuery } from "@tanstack/react-query";
import type { Offer } from "../types";

const API_URL = 'https://search-api.fie.future.net.uk/widget.php?model_name=xbox_one_s&area=US&rows=10';

interface ApiResponse {
    widget: {
        data: {
            offers: Offer[];
        };
    };
}

export const useFetchOffers = () => {
    return useQuery<Offer[]>({
        queryKey: ['offers'],
        queryFn: async () => {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Network response was not ok');
            const data: ApiResponse = await response.json();
            return data.widget.data.offers;
        },
    });
}