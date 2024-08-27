import { ItemType } from "../components/ItemCard/ItemCard";

type ApiResponse = ItemType[];

type ReturnType = ItemType | null;

export async function fetchProduct(
	id: number,
	category: "men" | "women" | "kids" | "technology"
): Promise<ReturnType> {
	let data: ApiResponse | null = null;

	// Use dynamic imports for local JSON files
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

	// Return the data or null if not found

	const item = data.filter(s => s.itemId === id)
	if (item.length === 0) {
		return null;
	}
	return item[0];
}
