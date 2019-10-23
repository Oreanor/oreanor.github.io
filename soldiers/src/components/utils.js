import { filterProperties } from "./consts";

export function sortBy(filters) {
	return function(a, b) {
		for (let i = 0; i < filters.length; i++) {
			const prop = filterProperties[filters[i]];
			if (a[prop] < b[prop]) {
				return -1;
			}
			if (a[prop] > b[prop]) {
				return 1;
			}
		}
		if (a["name"] < b["name"]) {
			return -1;
		}
		if (a["name"] > b["name"]) {
			return 1;
		}
		return 0;
	};
}
