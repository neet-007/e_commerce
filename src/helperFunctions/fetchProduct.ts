import { ItemType } from "../components/ItemCard/ItemCard";

type ApiResponse = ItemType[];

type ReturnType = { results: ItemType, carousel: ItemType[] } | null;

export async function fetchProduct(
	id: number,
	category: "men" | "women" | "kids" | "technology"
): Promise<ReturnType> {
	let data: ApiResponse | null = null;

	switch (category) {
		case "men":
			data = (await import(`../api/menProducts.json`)).default;
			break;
		case "women":
			data = (await import(`../api/womenProducts.json`)).default;
			break;
		case "kids":
			data = (await import(`../api/kidsProducts.json`)).default;
			break;
		case "technology":
			data = (await import(`../api/technologyProducts.json`)).default;
			break;
		default:
			throw new Error(`Unknown category: ${category}`);
	}


	const item = data.filter(s => s.itemId === id)
	if (item.length === 0) {
		return null;
	}

	const carousel = data.length >= 12 ? data.slice(0, 12) : data.length >= 6 ? data.slice(0, 6) : [];

	return {
		results: item[0],
		carousel
	};
}
