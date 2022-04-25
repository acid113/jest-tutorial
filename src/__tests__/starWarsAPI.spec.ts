import {fetchPeople, fetchPerson} from "../api/starWarsAPI"
import axios from "axios";

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
const mockedAxios = axios as jest.Mocked<typeof axios>

describe("Star Wars API", () => {
	test("should get a person", async () => {
		// * Option 1: using jest.Mocked
		mockedAxios.request.mockResolvedValueOnce({
			data : person1
		});

		const person = await fetchPerson("1");
		
		expect(person).not.toBeNull();
		expect(person.name).toEqual(person1.name);
		expect(person.gender).toEqual(person1.gender);
	});

	test("should get people", async () => {
		// * Option 2: using jest.spyOn
		const spyRequest = jest.spyOn(axios, 'request').mockResolvedValue({
			data: {
				results: people
			}
		});

		const personList = await fetchPeople();

		expect(spyRequest).toHaveBeenCalled();
		expect(personList).not.toBeNull();
		expect(personList[1].name).toEqual(person2.name);
		expect(personList[1].gender).toEqual(person2.gender);
	});
});
