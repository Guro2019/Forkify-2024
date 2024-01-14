// Global app controller

import Search from "./modules/Search.js";
import { elements } from "./views/base.js";
import * as searchView  from "./views/searchView.js";


/* 
serch object
Current recipe object
Shoping list object
liked recipe
*/
const state = {};

/* serch controler */


const controlSearch = async (e) => {
    e.prevenDefault()

    const query = searchView.getInput();


    state.search = new Search("pizza");
    await state.search.getResult()
    console.log(state)
}

// 1) get query from view

// 2) 


elements.searchForm.addEventListener("submit", controlSearch)
