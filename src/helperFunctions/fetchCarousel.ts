import { ItemType } from "../components/ItemCard/ItemCard";

type ApiResponse = ItemType[];

type ReturnType = { carousel: ItemType[] } | null;

export async function fetchCarousel(): Promise<ReturnType> {
	let data: ApiResponse | null = null;

	data = (await import(`../api/menProducts.json`)).default;

	const carousel = data.length >= 12 ? data.slice(0, 12) : data.length >= 6 ? data.slice(0, 6) : [];

	return {
		carousel
	};
}
