import axios, { AxiosRequestConfig } from "axios";
import { People } from "../model/people";

export const fetchPeople = async (): Promise<People[]> => {
	const option: AxiosRequestConfig = {
		method: "GET",
		url: "https://swapi.dev/api/people/",
	};

	const response = await axios.request(option);
	const { results } = response.data;

	const people: People[] = results;
	return people;
};

export const fetchPerson = async (id: string): Promise<People> => {
	const option: AxiosRequestConfig = {
		method: "GET",
		url: `https://swapi.dev/api/people/${id}`,
	};

	const response = await axios.request(option);
	const people: People = response.data;
	return people;
};
