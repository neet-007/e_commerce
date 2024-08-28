import { ItemType } from "../components/ItemCard/ItemCard";

type ReturnType = {
	results: ItemType[];
	page: number;
	carousel: ItemType[];
	filters: Map<string, [string, boolean][]>
};

export async function fetchProducts(
	page: number,
	category: "men" | "women" | "kids" | "technology",
	searchParams?: Record<string, string>
): Promise<ReturnType> {
	let data;

	switch (category) {
		case "men":
			data = (await import("../api/menProducts.json")).default;
			break;
		case "women":
			data = (await import("../api/womenProducts.json")).default;
			break;
		case "kids":
			data = (await import("../api/kidsProducts.json")).default;
			break;
		case "technology":
			data = (await import("../api/technologyProducts.json")).default;
			break;
		default:
			throw new Error(`Unknown category: ${category}`);
	}

	const itemsPerPage = 20;
	const skip = page * itemsPerPage;
	let paginatedResults = data.slice(skip, skip + itemsPerPage) as ItemType[];
	const carousel = data.length >= 12 ? data.slice(0, 12) as ItemType[] : data.length >= 6 ? data.slice(0, 6) as ItemType[] : [];

	console.log(searchParams)
	if (searchParams && Object.keys(searchParams).length) {
		const filteredResults = [] as ItemType[];
		Object.entries(searchParams).forEach(([key, value]) => {
			const filterOptions = value.split(",")
			for (let i = 0; i < filterOptions.length; i++) {
				for (let j = 0; j < paginatedResults.length; j++) {
					if (paginatedResults[j].optionsSelector.name.toLocaleLowerCase() === key &&
						paginatedResults[j].optionsSelector.options.map(x => x.toLocaleLowerCase()).includes(filterOptions[i])) {
						filteredResults.push(paginatedResults[j])
					}
				}
			}
		})
		console.log(filteredResults)
		paginatedResults = filteredResults
	}

	const filters = paginatedResults.reduce((prev: Map<string, [string, boolean][]>, curr) => {
		const key = curr.optionsSelector.name.toLowerCase();

		const existingOptions = prev.get(key) || [];

		const existingOptionsMap = new Map(existingOptions);

		const updatedOptions = curr.optionsSelector.options.map(option => {
			const lowerOption = option.toLowerCase();
			if (searchParams && Object.keys(searchParams).length && searchParams[key]) {
				return [option, searchParams[key].split(",").includes(lowerOption) || false] as [string, boolean];
			}
			return [option, false] as [string, boolean]
		});

		const combinedOptions = new Map<string, boolean>([
			...existingOptionsMap,
			...updatedOptions
		]);

		prev.set(key, Array.from(combinedOptions.entries()));

		return prev;
	}, new Map<string, [string, boolean][]>());

	return {
		results: paginatedResults,
		page,
		carousel,
		filters
	};
}
