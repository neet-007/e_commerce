import { ItemCardProps } from "../components/ItemCard/ItemCard";

type ApiResponse = ItemCardProps;

type ReturnType = ItemCardProps | null;

export async function fetchProduct(
  id: number,
  category: "men" | "women" | "kids" | "technology"
): Promise<ReturnType> {
  let res: Response;

  switch (category) {
    case "men":
      res = await fetch(`/api/menProducts/${id}.json`);
      break;
    case "women":
      res = await fetch(`/api/womenProducts/${id}.json`);
      break;
    case "kids":
      res = await fetch(`/api/kidsProducts/${id}.json`);
      break;
    case "technology":
      res = await fetch(`/api/technologyProducts/${id}.json`);
      break;
    default:
      throw new Error(`Unknown category: ${category}`);
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  const data: ApiResponse = await res.json();

  return data || null
}
