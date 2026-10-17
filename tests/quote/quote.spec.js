import {test} from '@playwright/test'
import loginData from '../../testdata/login.json'
import quoteData from '../../testdata/quote.json'
import { login } from '../../pages/login';
import { quote } from '../../pages/quote';



// test ('opportunity', async({page}) => {
//     await page.goto('http://localhost:8888/');
//     await page.locator('//input[@name="user_name"]').fill('admin');
//     await page.locator('//input[@name="user_password"]').fill('admin');
//     await page.getByRole('button',{name:'Login'}).click();
//     await page.getByRole('link',{name:'More'}).click()
//     await page.getByRole('link',{name:'Quotes'}).click()
//     await page.locator('//img[@alt="Create Quote..."]').click()
//     await page.locator('//input[@name="subject"]').fill('Test quote')
//     await page.locator('//input[@name="validtill"]').fill('2026-10-03')
//     await page.locator('//select[@name="carrier"]').selectOption({label:'UPS'})
//     await page.locator('//select[@name="quotestage"]').selectOption({label:'Created'})
//     await page.locator('//input[@name="account_name"]').click()
//     let popuppromise = page.waitForEvent('popup')
//     await page.locator('//img[@title="Select"]').nth(2).click();
//     let popup = await popuppromise;
//     await popup.waitForLoadState('load');
//     await popup.locator('//a[text()="abc goods organization"]').click();
//     console.log('organization selected successfully!');
//     await page.locator('//textarea[@name="bill_street"]').fill('test billing address')
//     await page.locator('//textarea[@name="ship_street"]').fill('test shipping address')
//     await page.locator('//input[@name="productName1"]').fill('testproduct')
//     await page.locator('//input[@name="qty1"]').fill('5')
//     await page.locator('//input[@name="listPrice1"]').fill('100')
//     await page.locator('button',{name:'Add Product'}).click()
//     await page.locator('button',{name:'Add Service'}).click()
//     await page.locator('//input[@name="productName2"]').fill('testproduct2')
//     await page.locator('//input[@name="qty2"]').fill('10')
//     await page.locator('//input[@name="listPrice2"]').fill('200')
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click();
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
//     await page.getByRole('link',{name:'Sign Out'}).click();

// })

test ('opportunity', async({page}) => {
    await page.goto('http://localhost:8888/');
    await page.locator('//input[@name="user_name"]').fill(loginData.username);
    await page.locator('//input[@name="user_password"]').fill(loginData.password);
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name:'More'}).click()
    await page.getByRole('link',{name:'Quotes'}).click()
    await page.locator('//img[@alt="Create Quote..."]').click()
    await page.locator('//input[@name="subject"]').fill(quoteData.subject)
    await page.locator('//input[@name="validtill"]').fill(quoteData.validtill)
    await page.locator('//select[@name="carrier"]').selectOption({label:'UPS'})
    await page.locator('//select[@name="quotestage"]').selectOption({label:'Created'})
    await page.locator('//input[@name="account_name"]').click()
    let popuppromise = page.waitForEvent('popup')
    await page.locator('//img[@title="Select"]').nth(2).click();
    let popup = await popuppromise;
    await popup.waitForLoadState('load');
    await popup.locator('//a[text()="abc goods organization"]').click();
    console.log('organization selected successfully!');
    await page.locator('//textarea[@name="bill_street"]').fill(quoteData.bill_street)
    await page.locator('//textarea[@name="ship_street"]').fill(quoteData.ship_street)
    await page.locator('//input[@name="productName1"]').fill(quoteData.productName1)
    await page.locator('//input[@name="qty1"]').fill(quoteData.qty1)
    await page.locator('//input[@name="listPrice1"]').fill(quoteData.listPrice1)
    await page.locator('button',{name:'Add Product'}).click()
    await page.locator('button',{name:'Add Service'}).click()
    await page.locator('//input[@name="productName2"]').fill(quoteData.productName2)
    await page.locator('//input[@name="qty2"]').fill(quoteData.qty2)
    await page.locator('//input[@name="listPrice2"]').fill(quoteData.listPrice2)
    await page.locator('//input[@title="Save [Alt+S]"]').first().click();
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
    await page.getByRole('link',{name:'Sign Out'}).click();

})
 test ('quote with pom and ddt',async({page}) => {
    test.slow
    let signin = new quote(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username,loginData.password)
    let quotecreation = new quote(page)
    await quotecreation.createquotemethod(quoteData.subject,quoteData.carrier,quoteData.quotestage)
 })
