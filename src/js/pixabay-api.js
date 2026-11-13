// import axios from 'axios';

// const API_KEY = '58513783-c074b567a6b43a9da53b32320';
// const BASE_URL = 'https://pixabay.com/api/';

// export function getImagesByQuery(query) {
//     return axios.get(BASE_URL, {
//         params: {
//             key: API_KEY,
//             q: query,
//             image_type: 'photo',
//             orientation: 'horizontal',
//             safesearch: true,
//         },
//     })
//         .then(response => {
//             return response.data;
//         });
// }



import axios from 'axios'

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

export function getBooksByQuery(query) {
    return axios.get(BASE_URL, {
        params: {
            q: query
        }
    })
        .then(response => {
            return response.data
        })
}

