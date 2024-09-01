import { ItemType } from "../components/ItemCard/ItemCard";

type ReturnType = {
	results: ItemType[];
	page: number;
	count: number;
	prevPage: boolean;
	nextPage: boolean;
	carousel: ItemType[];
	filters: Map<string, [string, boolean][]>
	colors: [string, boolean][]
};

export async function fetchProducts(
	page: number,
	category: "men" | "women" | "kids" | "technology",
	searchParams?: Record<string, string>
): Promise<ReturnType> {
	let data: ItemType[];
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

	const carousel = data.length >= 12 ? data.slice(0, 12) as ItemType[] : data.length >= 6 ? data.slice(0, 6) as ItemType[] : [];

	if (searchParams && Object.keys(searchParams).length) {
		const filteredResults = [] as ItemType[];
		Object.entries(searchParams).forEach(([key, value]) => {
			const filterOptions = value.split(",")
			for (let i = 0; i < filterOptions.length; i++) {
				for (let j = 0; j < data.length; j++) {
					if (key === "color") {
						if (data[j].optionsSelectorClr.map(x => x.toLocaleLowerCase().includes(filterOptions[i]))) {
							filteredResults.push(data[j])
						}
					}
					else if (data[j].optionsSelector.name.toLocaleLowerCase() === key &&
						data[j].optionsSelector.options.map(x => x.toLocaleLowerCase()).includes(filterOptions[i])) {
						filteredResults.push(data[j])
					}
				}
			}
		})
		data = Array.from(new Set(filteredResults))
	}
	const itemsPerPage = 20;
	const skip = (page - 1) * itemsPerPage;
	let paginatedResults = data.slice(skip, skip + itemsPerPage) as ItemType[];


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

	const colors = paginatedResults.reduce((prev: [string, boolean][], curr) => {
		if (curr.optionsSelectorClr && curr.optionsSelectorClr) {
			curr.optionsSelectorClr.forEach((color) => {
				if (searchParams && Object.keys(searchParams).length && searchParams.color) {
					if (!prev.find(x => x[0] === color.toLocaleLowerCase())) {
						prev.push([color.toLocaleLowerCase(), searchParams.color.split(",").includes(color.toLocaleLowerCase())])
					}
				} else if (!prev.find(x => x[0] === color.toLocaleLowerCase())) {
					prev.push([color.toLocaleLowerCase(), false])
				}
			});
		}
		return prev;
	}, []);

	return {
		results: paginatedResults,
		page,
		count: data.length,
		prevPage: page > 1,
		nextPage: skip < data.length - 1,
		carousel,
		filters,
		colors
	};
}
