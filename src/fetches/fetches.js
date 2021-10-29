import axios from 'axios';

const url = axios.create({
  baseURL: 'https://swapi.dev/api/'
});

let responseData = [];

const getData = (path) => {
  axios.get(path).then(res => {
    responseData = responseData.concat(res.data.results);
    if(res.data.next){
      getData(res.data.next);
    }else{
      return responseData;
    };
  });
};

const processResponse = (data) => {
  responseData(people => [...people, ...data.results]);
  if(data.next){
    getData(data.next);
  }else{
    return responseData;
  };
};

export const getAllPeople = (page) => url.get(`people/?page=${page}`, page);
export const searchPeople = (url) => {
   return getData(url);
};
