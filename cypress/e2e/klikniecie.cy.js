/// <reference types="cypress"/>

describe("Klikniecie w element na stronie", ()=>{
    it("Klikniecie w zakladke contact us", () => {
        cy.visit("/");
        cy.get('a[title="Contact us"]').click();
    })
})
