import axios from 'axios';

const url = axios.create({
  baseURL: 'https://swapi.dev/api/'
});

export const getAllPeople = (page) => url.get(`people/?page=${page}`, page);
