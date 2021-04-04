import { fetchPeople, fetchPerson } from "../api/StarWars";
const axios = require("axios"); // * 'import axios' didn't work

const person1 = {
	name: "Luke Skywalker Mock",
	gender: "male",
};

const person2 = {
	name: "R2-D2 Mock",
	gender: "n/a",
};

const people = [person1, person2];

// * mocking modules
jest.mock("axios");

describe("Star Wars API", () => {
	test("should get a person", async () => {
		// ? doesn't work with 'import'
		axios.request.mockImplementationOnce(() =>
			Promise.resolve({
				data: person1,
			})
		);

		const person = await fetchPerson("1");

		expect(person).not.toBeNull();
		expect(person.name).toEqual(person1.name);
		expect(person.gender).toEqual(person1.gender);
	});

	test("should get people", async () => {
		axios.request.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					results: people,
				},
			})
		);

		const personList = await fetchPeople();

		expect(personList).not.toBeNull();
		expect(personList[1].name).toEqual(person2.name);
		expect(personList[1].gender).toEqual(person2.gender);
	});
});
