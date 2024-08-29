import { ItemType } from "../components/ItemCard/ItemCard";

type ApiResponse = ItemType[];

type ReturnType = { carousel1: ItemType[], carousel2: ItemType[], carousel3: ItemType[] } | null;

export async function fetchHomepage(): Promise<ReturnType> {
	let data: ApiResponse | null = null;

	data = (await import(`../api/menProducts.json`)).default;

	const carousel1 = data.slice(0, 6);

	const carousel2 = data.slice(6, 12);

	const carousel3 = data.slice(12, 18);
	return {
		carousel1,
		carousel2,
		carousel3
	};
}
