const filterByTerm = jest.fn();

jest.mock("../shared/filterByTerm", () => {
	filterByTerm;
});

describe("Filter function", () => {
	test("should throw error", () => {
		// Note: mocked error doesn't count in coverage
		filterByTerm.mockImplementationOnce(() => {
			throw Error("error encountered");
		});

		expect(filterByTerm).toThrowError();
	});
});
