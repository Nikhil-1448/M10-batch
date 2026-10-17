import { expect } from "@playwright/test";

export class salesorder{
    #More
    #salesorder
    #createsalesorder
    #subjet
    #billstreet
    #shipstreet
    #save
    constructor(page){
        this.page = page
        this.#More = page.getByRole('link',{name:'More'})
        this.#salesorder = page.getByRole('link',{name:'Sales Order'})
        this.#createsalesorder = page.locator('//img[@alt="Create Sales Order..."]')
        this.#subjet = page.locator('//input[@name="subject"]')
        this.#billstreet = page.locator('//textarea[@name="bill_street"]')
        this.#shipstreet = page.locator('//textarea[@name="ship_street"]')
        this.#save = page.locator('//input[@title="Save [Alt+S]"]')
    }
    async createsalesordermethod(subject,bill_street,ship_street){
        await this.#More.click()
        await this.#salesorder.click()
        await this.#createsalesorder.click()
        await this.#subjet.fill('test sales order')
        await this.#billstreet.fill('test billing organization')
        await this.#shipstreet.fill('test shipping address')
        await this.#save.first().click()
    }
}