import { elements } from "./base";

export const getInput =() => elements.searchInput.value;

export const clearInput =() => elements.searchInput.value =" ";

export const clearResult =() => {
    elements.serchResList.innerHTML = ' ';
    elements.searchResPage.innerHTML = '';
}

const limitRecipeTitle =(title, limit = 17) =>{
    const newTitle = []
    if(title.length > limit){
        title.split(" ").reduce((acc, cur) =>{
                if(acc +cur.length <= limit){
                    newTitle.push(cur)
                }
                return acc + cur.length
        }, 0);

        return `${newTitle.join(" ")}...`

    }
    return title;
}

const renderRecipe = (recipe) => {
    const markup =`
                        <li>
                            <a class="likes__link" href="#${recipe.recipe_id}">
                                <figure class="likes__fig">
                                    <img src="${recipe.image_url}" alt="Test">
                                </figure>
                                <div class="likes__data">
                                    <h4 class="likes__name">${limitRecipeTitle(recipe.title)}</h4>
                                    <p class="likes__author">${recipe.publisher}</p>
                                </div>
                            </a>
                        </li>
    
    `;

    elements.serchResList.insertAdjacentHTML("beforeend", markup)
}
const createButton = (page, type) => `
        <button class="btn-inline results__btn--${type}" data-goto="${type === "prev" ? page -1 : page +1 }">
            <span>Page ${type === "prev" ? page -1 : page +1 }</span>
            <svg class="search__icon"> 
                <use href="img/icons.svg#icon-triangle-${type === "prev" ? "left" : "right"}"></use>
            </svg>
            
        </button>`

const renderButton = (page, numResult, resPerPage) =>{
    const pages = math.ceil(numResult/resPerPage);

    let button;
    if(page ===1 && pages > 1){
        //only button to go next page
       button = createButton(page, "next")
    }else if(page<pages){
        //both buttons
        button = `
            ${createButton(page, "prev")}
            ${createButton(page, "next")}
        `

    }else if(page ===pages && page>1){
        // only button to go prev page

       button = createButton(page, "prev")
    }

    elements.searchResPage.insertAdjacentHTML("afterbegin", button);
}

export const renderResult = (recipes,page = 1,resPerPage = 5) =>{
    const start = (page -1) * resPerPage;
    const end =page * resPerPage;
    recipes.slice(start, end).forEach(renderRecipe)

    //render Button
    renderButton(page,recipes.length, resPerPage)

}

