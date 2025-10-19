class SearchBox{
    getSearchBox(){
        return cy.get('#search_query_top');
    }

    getAlertNoItem(){
        return cy.get("p.alert");
    }

    getSearchButton(){
        return cy.get(".button-search");
    }

    clearSearch(){
        this.getSearchBox().clear();
    }

    typeSearchPhrase(searchValue){
        this.getSearchBox().type(searchValue);
    }

    clickSearchButton(){
        this.getSearchButton().click();
    }
}

export default new SearchBox();