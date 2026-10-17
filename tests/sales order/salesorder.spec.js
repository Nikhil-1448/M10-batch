import {test} from '@playwright/test'
import loginData from '../../testdata/login.json'
import salesorderData from '../../testdata/salesorder.json'
import { login } from '../../pages/login';
import { saleorder } from '../../pages/salesorder';


// test ('salesorder', async({page}) => {
//     await page.goto('http://localhost:8888/');
//     await page.locator('//input[@name="user_name"]').fill('admin');
//     await page.locator('//input[@name="user_password"]').fill('admin');
//     await page.getByRole('button',{name:'Login'}).click();
//     await page.getByRole('link',{name:'More'}).click()
//     await page.getByRole('link',{name:'Sales Order'}).click()
//     await page.locator('//img[@alt="Create Sales Order..."]').click()
//     await page.locator('//input[@name="subject"]').fill('test sales order')
    
//     let popuppromise = page.waitForEvent('popup')
//     await page.locator('(//img[@title="Select"])[4]').click();
//     let popup = await popuppromise;
//     await popup.waitForLoadState('load');
//     await popup.locator('//a[text()="abc goods organization"]').click();
//     console.log('organization selected successfully!');
//     await page.locator('//textarea[@name="bill_street"]').fill('test billing organization')
//     await page.locator('//textarea[@name="ship_street"]').fill('test shipping address')
//      await page.locator('//input[@title="Save [Alt+S]"]').first().click();
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
//     await page.getByRole('link',{name:'Sign Out'}).click();


// })

test ('salesorder with ddt', async({page}) => {
    await page.goto('http://localhost:8888/');
    await page.locator('//input[@name="user_name"]').fill(loginData.username);
    await page.locator('//input[@name="user_password"]').fill(loginData.password);
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name:'More'}).click()
    await page.getByRole('link',{name:'Sales Order'}).click()
    await page.locator('//img[@alt="Create Sales Order..."]').click()
    await page.locator('//input[@name="subject"]').fill(salesorderData.subject)
    
    let popuppromise = page.waitForEvent('popup')
    await page.locator('(//img[@title="Select"])[4]').click();
    let popup = await popuppromise;
    await popup.waitForLoadState('load');
    await popup.locator('//a[text()="abc goods organization"]').click();
    console.log('organization selected successfully!');
    await page.locator('//textarea[@name="bill_street"]').fill(salesorderData.bill_street)
    await page.locator('//textarea[@name="ship_street"]').fill(salesorderData.ship_street)
     await page.locator('//input[@title="Save [Alt+S]"]').first().click();
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
    await page.getByRole('link',{name:'Sign Out'}).click();


})
test('salesorder with pom and ddt',async({page}) => {
    test.slow
    let signin = new salesorder(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username,loginData.password)
    let salesordercreation = new salesorder(page)
    await salesordercreation.createsalesordermethod(salesorderData.subject,salesorderData.bill_street,salesorderData.ship_street)
})