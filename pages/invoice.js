import { expect } from "@playwright/test";

export class invoice{
    #More
    #invoice
    #createinvoice
    #subject
    #billstreet
    #shipstreet
    #save
    constructor(page){
        this.page = page
        this.#More = page.getByRole('link',{name:'More'})
        this.#invoice = page.getByRole('link',{name:'Invoice'})
        this.#createinvoice = page.locator('//img[@alt="Create Invoice..."]')
        this.#subject = page.locator('//input[@name="subject"]')
        this.#billstreet = page.locator('//textarea[@name="bill_street"]')
        this.#shipstreet = page.locator('//textarea[@name="ship_street"]')
        this.#save = page.locator('//input[@title="Save [Alt+S]"]')
    }
    async createinvoicemethod(subject,bill_street,ship_street){
        await this.#More.click()
        await this.#invoice.click()
        await this.#createinvoice.click()
        await this.#subject.fill('test invoice')
        await this.#billstreet.fill('test billing area')
        await this.#shipstreet.fill('test shipping area')
        await this.#save.first().click()
    }
}