import {test} from '@playwright/test'
import loginData from '../../testdata/login.json'
import invoiceData from '../../testdata/invoice.json'
import { login } from '../../pages/login';
import { invoice } from '../../pages/invoice';


// test ('invoice', async({page}) => {
//     await page.goto('http://localhost:8888/');
//     await page.locator('//input[@name="user_name"]').fill('admin');
//     await page.locator('//input[@name="user_password"]').fill('admin');
//     await page.getByRole('button',{name:'Login'}).click();
//     await page.getByRole('link',{name:'More'}).click()
//     await page.getByRole('link',{name:'Invoice'}).click()
//     await page.locator('//img[@alt="Create Invoice..."]').click()
//     await page.locator('//input[@name="subject"]').fill('test invoice')
    
//     let popuppromise = page.waitForEvent('popup')
//     await page.locator('(//img[@title="Select"])[3]').click();
//     let popup = await popuppromise;
//     await popup.waitForLoadState('load');
//     await popup.locator('//a[text()="abc goods organization"]').click();
//     console.log('organization selected successfully!');
//     await page.locator('//textarea[@name="bill_street"]').fill('test billing area')
//     await page.locator('//textarea[@name="ship_street"]').fill('test shipping area')

//     await page.locator('//input[@title="Save [Alt+S]"]').first().click();
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
//     await page.getByRole('link',{name:'Sign Out'}).click();

// })

test ('invoice with ddt', async({page}) => {
    await page.goto('http://localhost:8888/');
    await page.locator('//input[@name="user_name"]').fill(loginData.username);
    await page.locator('//input[@name="user_password"]').fill(loginData.password);
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name:'More'}).click()
    await page.getByRole('link',{name:'Invoice'}).click()
    await page.locator('//img[@alt="Create Invoice..."]').click()
    await page.locator('//input[@name="subject"]').fill(invoiceData.subject)
    
    let popuppromise = page.waitForEvent('popup')
    await page.locator('(//img[@title="Select"])[3]').click();
    let popup = await popuppromise;
    await popup.waitForLoadState('load');
    await popup.locator('//a[text()="abc goods organization"]').click();
    console.log('organization selected successfully!');
    await page.locator('//textarea[@name="bill_street"]').fill(invoiceData.bill_street)
    await page.locator('//textarea[@name="ship_street"]').fill(invoiceData.ship_street)

    await page.locator('//input[@title="Save [Alt+S]"]').first().click();
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
    await page.getByRole('link',{name:'Sign Out'}).click();

})
test('invoicw with pom and ddt',async({page}) => {
    test.slow
    let signin = new login(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username,loginData.password)
    let invoicecreation = new invoice(page)
    await invoicecreation.createinvoicemethod(invoiceData.subject,invoiceData.bill_street,invoiceData.ship_street)
})