import { expect } from "@playwright/test";

export class lead{
    #lead
    #createlead
    #salutationtype
    #firstname
    #lastname
    #company
    #save
    #validation
    constructor(page){
        this.page = page
        this.#lead = page.getByRole('cell',{name:'Leads',exact:true})
        this.#createlead = page.getByRole('img',{name:'Create Lead...'})
        this.#salutationtype = page.locator('//select[@name="salutationtype"]')
        this.#firstname = page.locator('//input[@name="firstname"]')
        this.#lastname = page.locator('//input[@name="lastname"]')
        this.#company = page.locator('//input[@name="company"]')
        this.#save = page.locator('//input[@title="Save [Alt+S]"]')
        this.#validation = page.locator('//span[@id="dtlview_First Name"]')
    }
    async createleadmethod(firstname,lastname,company){
        await this.#lead.click()
        await this.#createlead.click()
        await this.#salutationtype.selectOption({value:'Mr.'})
        await this.#firstname.fill(firstname)
        await this.#lastname.fill(lastname)
        await this.#company.fill(company)
        await this.#save.first().click()
    }
}