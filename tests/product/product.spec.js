import {test} from '@playwright/test'
import loginData from '../../testdata/login.json'
import productData from '../../testdata/product.json'
import { login } from '../../pages/login';
import { product } from '../../pages/product';

// test ('product', async({page}) => {
//     await page.goto('http://localhost:8888/');
//     await page.locator('//input[@name="user_name"]').fill('admin');
//     await page.locator('//input[@name="user_password"]').fill('admin');
//     await page.getByRole('button',{name:'Login'}).click();
//     await page.getByRole('link',{name:'Products'}).click()
//     await page.locator('//img[@alt="Create Product..."]').click()
//     await page.locator('//input[@name="productname"]').fill('Test product')
//     await page.locator('//input[@name="discontinued"]').check()
//     await page.locator('//input[@name="sales_start_date"]').fill('2026-10-01')
//     await page.locator('//select[@name="productcategory"]').selectOption({label:'Hardware'})
//     //await page.locator('//input[@name="vendor_name"]').fill('test vendor')  
//     await page.locator('//select[@name="glacct"]').selectOption({label:'301-Sales-Hardware'})
//     await page.locator('//select[@name="manufacturer"]').selectOption({label:'AltvetPet Inc.'})
//     await page.locator('//input[@name="qtyinstock"]').fill('100')
//     await page.locator('//select[@name="assigned_user_id"]').selectOption({label:' Administrator'})
//     await page.locator('//input[@id="my_file_element"]').setInputFiles('c:/Users/golla/Downloads/vtigercrm-5.4.0.zip')
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click();
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
//     await page.getByRole('link',{name:'Sign Out'}).click();

// })

test ('product with ddt', async({page}) => {
    await page.goto('http://localhost:8888/');
    await page.locator('//input[@name="user_name"]').fill(loginData.username);
    await page.locator('//input[@name="user_password"]').fill(loginData.password);
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name:'Products'}).click()
    await page.locator('//img[@alt="Create Product..."]').click()
    await page.locator('//input[@name="productname"]').fill(productData.productname)
    await page.locator('//input[@name="discontinued"]').check()
    await page.locator('//input[@name="sales_start_date"]').fill(productData.sales_start_date)
    await page.locator('//select[@name="productcategory"]').selectOption({label:'Hardware'})
    //await page.locator('//input[@name="vendor_name"]').fill('test vendor')  
    await page.locator('//select[@name="glacct"]').selectOption({label:'301-Sales-Hardware'})
    await page.locator('//select[@name="manufacturer"]').selectOption({label:'AltvetPet Inc.'})
    await page.locator('//input[@name="qtyinstock"]').fill(productData.qtyinstock)
    await page.locator('//select[@name="assigned_user_id"]').selectOption({label:' Administrator'})
    await page.locator('//input[@id="my_file_element"]').setInputFiles('c:/Users/golla/Downloads/vtigercrm-5.4.0.zip')
    await page.locator('//input[@title="Save [Alt+S]"]').first().click();
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
    await page.getByRole('link',{name:'Sign Out'}).click();

})

test('product with ddt and pom',async({page}) => {
    test.slow
    let signin = new login(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username,loginData.password)
    let productcreation = new product(page)
    await productcreation.createproductmethod(productData.productname,productData.productcategory,productData.glacct)
})