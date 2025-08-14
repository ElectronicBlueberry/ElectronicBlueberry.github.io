export function toSlug(route: string | string[] | undefined) {
	if (route === undefined) {
		return "/";
	} else if (Array.isArray(route)) {
		return `/${route.join("/")}`;
	} else {
		return `/${route}`;
	}
}
