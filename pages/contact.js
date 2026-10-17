import { expect } from '@playwright/test'

export class contact{
    #contact
    #contact    
    #createcontact
    #salutationtype
    #firstname
    #lastname
    #select
    #title
    #department
    #emailoptout
    #reference
    #portal
    #enddate
    #weekend
    #imagename
    #choosefile
    #save
    constructor(page){
        this.page = page
        this.#contact = page.getByRole('link',{name:'Contacts'})
        this.#createcontact = page.locator('//img[@alt="Create Contact..."]')
        this.#salutationtype = page.locator('//select[@name="salutationtype"]')
        this.#firstname = page.locator('//input[@name="firstname"]')
        this.#lastname = page.locator('//input[@name="lastname"]')
        this.#select = page.locator('//img[@title="Select"]')
        this.#title = page.locator('//input[@name="title"]')
        this.#department = page.locator('//input[@name="department"]')
        this.#emailoptout = page.locator('//input[@name="emailoptout"]')
        this.#reference = page.locator('//input[@name="reference"]')
        this.#portal = page.locator('//input[@name="portal"]')
        this.#enddate = page.locator('//img[@id="jscal_trigger_support_end_date"]')
        this.#weekend = page.locator('//td[@class="day selected weekend"]')
        this.#imagename = page.locator('//input[@name="imagename"]')
        this.#choosefile = page.getByRole('button',{name:'Choose File'})
        this.#save = page.locator('//input[@title="Save [Alt+S]"]')
}
async createcontactmethod(firstname,lastname,title){
    await this.#contact.click()
    await this.#createcontact.click()
    await this.#salutationtype.selectOption({value:'Mr.'})
    await this.#firstname.fill('Nikhil')
    await this.#lastname.fill('yadav')
    await this.#select.first().click()
    await this.#title.fill('QA Engineer')
    await this.#department.fill('testing')
    await this.#emailoptout.check()
    await this.#reference.check()
    await this.#portal.check()
    await this.#enddate.click()
    await this.#weekend.click()
    await this.#imagename.setInputFiles('c:/Users/golla/Downloads/vtigercrm-5.4.0.zip')
    await this.#choosefile.click()
    await this.#save.first().click()
}
}