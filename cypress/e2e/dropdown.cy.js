/// <reference types="cypress"/>

describe("Test związany z wwybieraniem select", ()=>{
    it("kliknięcie w zakładkę Women", () => {
        cy.visit("/");
        cy.get('a[title="Women"]').click();
        cy.url().should("include", "id_category=3&controller=category");
    })
    it("Wybranie z drop down menu", ()=>{
        cy.get('#selectProductSort').select("In stock");
        cy.get('#selectProductSort').should("have.value", "quantity:desc");
        
    })
    it("Sortowanie do A do Z", ()=>{
        cy.get('#selectProductSort').select("Product Name: A to Z");
        cy.get('#selectProductSort').should("have.value", "name:asc");
    })
    it("Sortowanie ceny malejąco", ()=>{
        cy.get('#selectProductSort').select("price:desc");
        cy.get('#selectProductSort').should("have.value", "price:desc");
    })
})