// Global app controller
import Search from './modules/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/** Global state of the app
 * -Search object : search query and result
 * current recipe object
 * shopping list object
 * liked recipes
 */

 
const state = {}

const controlSearch = async () => {
    // 1. get query from view
    const query = searchView.getInput(); //todo
    // console.log(query);

    if (query) {
        // 2. new search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for result
        searchView.clearInput();
        searchView.clearResults();

        //4. search for recipes
        await state.search.getResults();

        //5. render result on UI
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm. addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

