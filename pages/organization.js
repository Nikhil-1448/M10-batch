import { expect } from '@playwright/test'

export class organization{
    #organization
    #createorganization
    #accountname
    #website
    #tickersymbol
    #employees
    #email2
    #industry
    #accounttype
    #emailoutput
    #phone
    #fax
    #otherphone
    #email1
    #bill_street
    #Save
    constructor(page){
        this.page = page
        this.#organization = page.getByRole('cell',{name:'Organizations',exact:true})
        this.#createorganization = page.getByRole('img',{name:'Create Organization...'})
        this.#accountname = page.locator('//input[@name="accountname"]')
        this.#website = page.locator('//input[@name="website"]')
        this.#tickersymbol = page.locator('//input[@name="tickersymbol"]')
        this.#employees = page.locator('//input[@name="employees"]')
        this.#email2 = page.locator('//input[@name="email2"]')
        this.#industry = page.locator('//select[@name="industry"]')
        this.#accounttype = page.locator('//select[@name="accounttype"]')
        this.#emailoutput = page.locator('//input[@name="emailoptout"]')
        this.#phone = page.locator('//input[@name="phone"]')
        this.#fax = page.locator('//input[@name="fax"]')
        this.#otherphone = page.locator('//input[@name="otherphone"]')
        this.#email1 = page.locator('//input[@name="email1"]')
        this.#bill_street = page.locator('//textarea[@name="bill_street"]')
        this.#Save = page.locator('//input[@title="Save [Alt+S]"]')
}
async createorganizationmethod(accountname,website,tickersymbol){
    await this.#organization.click()
    await this.#createorganization.click()
    await this.#accountname.fill('abc goods organization')
    await this.#website.fill('www.abcgoods.com')
    await this.#tickersymbol.fill('ABC')
    await this.#employees.fill('100')
    await this.#email2.fill('abc@gmail.com')
    await this.#industry.selectOption({label:'Food & Beverage'})
    await this.#accounttype.selectOption({label:'Customer'})
    await this.#emailoutput.check()
    await this.#phone.fill('123456789')
    await this.#fax.fill('2223355')
    await this.#otherphone.fill('9876543210')
    await this.#email1.fill('huyt32165@gmail.com')
    await this.#bill_street.fill('98/25 main street')
    await this.#Save.first().click()
}
}