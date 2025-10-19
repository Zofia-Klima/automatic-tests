/// <reference types="cypress"/>
import{login, password} from "../fixtures/login.json"

describe("Custom commands", ()=>{
    it("Logowanie", ()=>{
        cy.login(login, password);
    })
})