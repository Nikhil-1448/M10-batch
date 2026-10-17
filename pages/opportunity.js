import { expect } from "@playwright/test";

export class opportunity{
    #opportunities
    #createopportunity
    #potentialname
    #relatedtotype
    #opportunitytype
    #leadsource
    #assigneduserid
    #amount
    #closingdate
    #nextstep
    #probability
    #salesstage
    #save
    constructor(page){
        this.page = page
        this.#opportunities = page.getByRole('link',{name:'OPPORTUNITIES'})
        this.#createopportunity = page.locator('//img[@alt="Create Opportunity..."]')
        this.#potentialname = page.locator('//input[@name="potentialname"]')
        this.#relatedtotype = page.locator('//select[@id="related_to_type"]')
        this.#opportunitytype = page.locator('//select[@name="opportunity_type"]')
        this.#leadsource = page.locator('//select[@name="leadsource"]')
        this.#assigneduserid = page.locator('//select[@name="assigned_user_id"]')
        this.#amount = page.locator('//input[@name="amount"]')
        this.#closingdate = page.locator('//input[@name="closingdate"]')
        this.#nextstep = page.locator('//input[@name="nextstep"]')
        this.#probability = page.locator('//input[@name="probability"]')
        this.#salesstage = page.locator('//select[@name="sales_stage"]')
        this.#save = page.locator('//input[@title="Save [Alt+S]"]')
    }
    async  createopportunitymethod(potentialname,closingdate,probability){
        await this.#opportunities.click()
        await this.#createopportunity.click()
        await this.#potentialname.fill('Test opportunity')
        await this.#relatedtotype.selectOption({label:'Organizations'})
        await this.#opportunitytype.waitFor()
        await this.#opportunitytype.selectOption({label:'New Business'})
        await this.#leadsource.selectOption({label:'Cold Call'})
        await this.#assigneduserid.selectOption({label:' Administrator'})
        await this.#amount.fill('5000')
        await this.#closingdate.fill('2026-10-01')
        await this.#nextstep.fill('next step')
        await this.#probability.fill('59')
        await this.#salesstage.selectOption({label:'Qualification'})
        await this.#save.first().click()
    }

}
