/// <reference types="cypress"/>

describe("Przykładowy test", ()=>{
    it("Otworzenie strony google.com", () => {
        cy.visit("https://google.com")
    })
})

