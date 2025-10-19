/// <reference types="cypress"/>
import SearchBox from "../pages/SearchBox"
import Base from "../pages/base"
import {itemNotFound} from "../fixtures/searchData.json"

describe("pisanie tekstu w pole", ()=>{
    it("Wypełnij pole", () => {
        Base.openHomePage();
        SearchBox.typeSearchPhrase("blouse {enter}");

        SearchBox.clearSearch();

        SearchBox.typeSearchPhrase("T-shirt");
        SearchBox.getSearchBox().should("have.value", "T-shirt");
        SearchBox.clickSearchButton();

        SearchBox.clearSearch();

        SearchBox.typeSearchPhrase("bluzka {enter}");
        SearchBox.getAlertNoItem().should("be.visible").and("include.text", itemNotFound);

        SearchBox.getSearchBox().should("have.class", "search_query");
    })
})