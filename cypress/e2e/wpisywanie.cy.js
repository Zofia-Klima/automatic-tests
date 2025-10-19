/// <reference types="cypress"/>

describe("pisanie tekstu w pole", ()=>{
    it("Wypełnij pole", () => {
        cy.visit("/");
        cy.get('a[title="Contact us"]').click();
        cy.get("#email").type("zosienka084@gmail.com");
    })
})