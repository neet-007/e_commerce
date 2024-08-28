import { ItemType } from "../components/ItemCard/ItemCard";

type ReturnType = {
	results: ItemType[];
	page: number;
	carousel: ItemType[];
	filters: Map<string, [string, boolean][]>
	colors: [string, boolean][]
};

export async function fetchSearch(
	title: string,
	page: number,
	searchParams?: Record<string, string>
): Promise<ReturnType> {
	let data;

	data = (await import("../api/menProducts.json")).default;
	data = data.filter(x => x.title.toLocaleLowerCase().includes(title));

	const itemsPerPage = 20;
	const skip = page * itemsPerPage;
	let paginatedResults: ItemType[];
	if (data.length < itemsPerPage) {
		paginatedResults = data
	} else {
		paginatedResults = data.slice(skip, skip + itemsPerPage) as ItemType[];
	}

	console.log(paginatedResults)
	console.log(searchParams)
	if (searchParams && Object.keys(searchParams).length) {
		const filteredResults = [] as ItemType[];
		Object.entries(searchParams).forEach(([key, value]) => {
			const filterOptions = value.split(",")
			for (let i = 0; i < filterOptions.length; i++) {
				for (let j = 0; j < paginatedResults.length; j++) {
					if (key === "color") {
						if (paginatedResults[j].optionsSelectorClr.map(x => x.toLocaleLowerCase().includes(filterOptions[i]))) {
							filteredResults.push(paginatedResults[j])
						}
					}
					else if (paginatedResults[j].optionsSelector.name.toLocaleLowerCase() === key &&
						paginatedResults[j].optionsSelector.options.map(x => x.toLocaleLowerCase()).includes(filterOptions[i])) {
						filteredResults.push(paginatedResults[j])
					}
				}
			}
		})
		console.log(filteredResults)
		paginatedResults = Array.from(new Set(filteredResults))
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
		carousel: [],
		filters,
		colors
	};
}
