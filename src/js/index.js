// Global app controller

import Search from "./modules/Search";
import { elements } from "./views/base";


/* 
serch object
Current recipe object
Shoping list object
liked recipe
*/
const state = {};

/* serch controler */

const controlSearch = (e) => {
    e.prevenDefault()


    state.search = new Search("pizza")
    console.log(state)
}

// 1) get query from view

// 2) 


elements.searchForm.addEventListener("submit", controlSearch)
