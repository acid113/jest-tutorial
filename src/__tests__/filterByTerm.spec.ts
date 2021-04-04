import filterByTerm from "../shared/filterByTerm";

describe("Filter function", () => {
	test("it should filter by a search term (link)", () => {
		const input = [
			{ id: 1, url: "https://swapi.dev/api/starship" },
			{ id: 2, url: "https://swapi.dev/api/people" },
			{ id: 3, url: "https://swapi.dev/api/planets" },
		];

		const output = [{ id: 3, url: "https://swapi.dev/api/planets" }];

		expect(filterByTerm(input, "planet")).toEqual(output);
		expect(filterByTerm(input, "PLANET")).toEqual(output);
	});

	test("it should throw error when input or search term are empty", () => {
		const input = [
			{ id: 1, url: "https://swapi.dev/api/starship" },
			{ id: 2, url: "https://swapi.dev/api/people" },
			{ id: 3, url: "https://swapi.dev/api/planets" },
		];

		const emptyInput: any = [];

		expect(() => {
			filterByTerm(emptyInput, "");
		}).toThrowError("input array cannot be empty");

		expect(() => {
			filterByTerm(input, "");
		}).toThrowError("search term cannot be empty");
	});
});
