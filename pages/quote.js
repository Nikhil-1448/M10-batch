import { expect } from "@playwright/test";

export class quote{
    #More
    #Quotes
    #createquote
    #subject
    #validtill
    #carrier
    #quotestage
    #billstreet
    #shipstreet
    #save
    constructor(page){
        this.page = page
        this.#More = page.getByRole('link',{name:'More'})
        this.#Quotes = page.getByRole('link',{name:'Quotes'})
        this.#createquote = page.locator('//img[@alt="Create Quote..."]')
        this.#subject = page.locator('//input[@name="subject"]')
        this.#validtill = page.locator('//input[@name="validtill"]')
        this.#carrier = page.locator('//select[@name="carrier"]')
        this.#quotestage = page.locator('//select[@name="quotestage"]')
        this.#billstreet = page.locator('//textarea[@name="bill_street"]')
        this.#shipstreet = page.locator('//textarea[@name="ship_street"]')
        this.#save = page.locator('//input[@title="Save [Alt+S]"]')
    }
    async createquotemethod(subject,carrier,quotestage){
        await this.#More.click()
        await this.#Quotes.click()
        await this.#createquote.click()
        await this.#subject.fill('Test quote')
        await this.#validtill.fill('2026-10-03')
        await this.#carrier.selectOption({label:'UPS'})
        await this.#quotestage.selectOption({label:'Created'})
        await this.#billstreet.fill('test billing address')
        await this.#shipstreet.fill('test shipping address')
        await this.#save.first().click()
    }
}