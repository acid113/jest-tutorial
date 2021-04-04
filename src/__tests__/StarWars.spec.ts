import { fetchPeople, fetchPerson } from "../api/StarWars";

// const person1 = {
// 	name: "Luke Skywalker",
// 	gender: "male",
// };

// const person2 = {
// 	name: "R2-D2",
// 	gender: "n/a",
// };

// const people = [
// 	{
// 		...person1,
// 		...person2,
// 	},
// ];

// const fetchPerson = jest.fn().mockReturnValue(person1);
// const fetchPeople = jest.fn().mockReturnValue(people);

// jest.mock("../api/StarWars", () => ({
// 	fetchPerson,
// 	fetchPeople,
// }));

describe("Star Wars API", () => {
	test("should get people", async () => {
		const person = await fetchPerson("1");

		expect(person).not.toBeNull();
		expect(person.name).toEqual("Luke Skywalker");
		expect(person.gender).toEqual("male");
	});

	// test("should get a person by ID", () => {});
});
