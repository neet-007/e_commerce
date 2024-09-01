import { ItemType } from "../components/ItemCard/ItemCard";

type ApiResponse = ItemType[];

type ReturnType = { results: ItemType, carousel: ItemType[] } | null;

export async function fetchProduct(
	id: number,
	category: "men" | "women" | "kids" | "technology"
): Promise<ReturnType> {
	let data: ApiResponse | null = null;

	let res;

	switch (category) {
		case "men":
			res = (await fetch("/menProducts.json"));
			break;
		case "women":
			res = (await fetch("/womenProducts.json"));
			break;
		case "kids":
			res = (await fetch("/kidsProducts.json"));
			break;
		case "technology":
			res = (await fetch("/technologyProducts.json"));
			break;
		default:
			throw new Error(`Unknown category: ${category}`);
	}

	if (res.status > 299) {
		const error = await res.json();
		throw Error(error)
	}

	data = await res.json()

	if (!data) {
		throw Error("counld not fetch")
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
