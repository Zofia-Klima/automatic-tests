/// <reference types="cypress"/>
import Base from "../pages/base"
import Home from "../pages/Home"
import Women from "../pages/Women"

describe("Test związany z zaznaczeniem checkboxa", ()=>{
    it("Otwarcie strony i kliknięcie w zakładkę Women", () => {
        Base.openHomePage();
        cy.url().should("include", "http://www.automationpractice.pl/index.php");

        Home.clickOnWomenTab();
        cy.url().should("include", "id_category=3&controller=category");
    })
    it("Zaznaczenie checkboxa w zakładce Women", ()=>{
        Women.topsCheckbox.check();
        Women.topsCheckbox.should("be.checked");
        
        Women.dressesCheckbox.check();
        Women.dressesCheckbox.should("be.checked");

        Women.checkSizes();
        Women.sizeCheckboxes.should("be.checked");
    })
})