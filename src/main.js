
import { getImagesByQuery } from "./js/pixabay-api.js"
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader
} from "./js/render-functions.js";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(".form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const search = event.currentTarget.elements['search-text'].value

    if (search === "") {
        return
    }

    clearGallery()

    showLoader()

    getImagesByQuery(search)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                createGallery(data.hits)
            }
        }).catch(error => {
            iziToast.error({
                message: 'Something went wrong. Please try again!',
            });
        }).finally(() => {
            hideLoader()
        })


})