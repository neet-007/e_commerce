import { ItemType } from "../components/ItemCard/ItemCard";

type ApiResponse = ItemType[];

type ReturnType = { carousel: ItemType[] } | null;

export async function fetchCarousel(): Promise<ReturnType> {
	let data: ApiResponse | null = null;

	let res = (await fetch("/menProducts.json"));

	if (res.status > 299) {
		throw Error("error")
	}

	data = await res.json();

	if (!data) {
		throw Error("error")
	}


	const carousel = data.length >= 12 ? data.slice(0, 12) : data.length >= 6 ? data.slice(0, 6) : [];

	return {
		carousel
	};
}
