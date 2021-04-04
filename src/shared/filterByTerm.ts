const filterByTerm = (inputArr: any, searchTerm: string) => {
	if (!inputArr.length) throw new Error("input array cannot be empty");
	if (!searchTerm) throw new Error("search term cannot be empty");

	const regex = new RegExp(searchTerm, "i");
	return inputArr.filter((arrayElement: any) =>
		arrayElement.url.match(regex)
	);
};

export default filterByTerm;
