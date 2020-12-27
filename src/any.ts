import axios from 'axios';

export { };

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url)
  .then(function (response) {
    console.log(response.data);
  });