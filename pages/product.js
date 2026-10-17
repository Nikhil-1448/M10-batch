import { expect, page } from "@playwright/test";

export class product{
    #products
    #createproduct
    #productname
    #discontinued
    #sales_start_date
    #productcategory
    #glacct
    #manufacturer
    #qtyinstock
    #assigned_user_id
    #my_file_element
    #save
    constructor(page){
        this.page = page
        this.#products = page.getByRole('link',{name:'Products'})
        this.#createproduct = page.locator('//img[@alt="Create Product..."]')
        this.#productname = page.locator('//input[@name="productname"]')
        this.#discontinued = page.locator('//input[@name="discontinued"]')
        this.#sales_start_date = page.locator('//input[@name="sales_start_date"]')
        this.#productcategory = page.locator('//select[@name="productcategory"]')
        this.#glacct = page.locator('//select[@name="glacct"]')
        this.#manufacturer = page.locator('//select[@name="manufacturer"]')
        this.#qtyinstock = page.locator('//input[@name="qtyinstock"]')
        this.#assigned_user_id = page.locator('//select[@name="assigned_user_id"]')
        this.#my_file_element = page.locator('//input[@id="my_file_element"]')
        this.#save = page.locator('//input[@title="Save [Alt+S]"]')
    }
    async createproductmethod(productname,productcategory,glacct){
        await this.#products.click()
        await this.#createproduct.click()
        await this.#productname.fill('Test product')
        await this.#discontinued.check()
        await this.#sales_start_date.fill('2026-10-01')
        await this.#productcategory.selectOption({label:'Hardware'})
        await this.#glacct.selectOption({label:'301-Sales-Hardware'})
        await this.#manufacturer.selectOption({label:'AltvetPet Inc.'})
        await this.#qtyinstock.fill('100')
        await this.#assigned_user_id.selectOption({label:' Administrator'})
        await this.#my_file_element.setInputFiles('c:/Users/golla/Downloads/vtigercrm-5.4.0.zip')
        await this.#save.first().click()
    }
}