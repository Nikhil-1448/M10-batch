import {test} from '@playwright/test'
import  loginData from '../../testdata/login.json'
import  contactData from '../../testdata/contact.json'
import { login } from '../../pages/login';
import { contact } from '../../pages/contact.js';


// test ('contact', async({page}) => {
//     await page.goto('http://localhost:8888/');
//     await page.locator('//input[@name="user_name"]').fill('admin');
//     await page.locator('//input[@name="user_password"]').fill('admin');
//     await page.getByRole('button',{name:'Login'}).click();
//     await page.getByRole('link',{name:'Contacts'}).click();
//     await page.locator('//img[@alt="Create Contact..."]').click();
//     await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'});
//     await page.locator('//input[@name="firstname"]').fill('Nikhil');
//     await page.locator('//input[@name="lastname"]').fill('yadav');
//     let popuppromise = page.waitForEvent('popup')
//     await page.locator('//img[@title="Select"]').first().click();
//     let popup = await popuppromise;
//     await popup.waitForLoadState('load');
//     await popup.locator('//a[text()="abc goods organization"]').click();
//     console.log('organization selected successfully!');
//     await page.locator('//input[@name="title"]').fill('QA Engineer')
//     await page.locator('//input[@name="department"]').fill('testing')
//     await page.locator('//input[@name="emailoptout"]').check()
//     await page.locator('//input[@name="reference"]').check()
//     await page.locator('//input[@name="portal"]').check()
//     await page.locator('//img[@id="jscal_trigger_support_end_date"]').click()
//     await page.locator('//td[@class="day selected weekend"]').click()
//     await page.locator('//input[@name="imagename"]').setInputFiles('c:/Users/golla/Downloads/vtigercrm-5.4.0.zip')
//     //await page.getByRole('button',{name:'Choose File'}).click()
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click();
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
//     await page.getByRole('link',{name:'Sign Out'}).click();
    

// });  


test ('contact with ddt', async({page}) => {
    await page.goto('http://localhost:8888/');
    await page.locator('//input[@name="user_name"]').fill(loginData.username);
    await page.locator('//input[@name="user_password"]').fill(loginData.password);
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name:'Contacts'}).click();
    await page.locator('//img[@alt="Create Contact..."]').click();
    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'});
    await page.locator('//input[@name="firstname"]').fill(contactData.firstname);
    await page.locator('//input[@name="lastname"]').fill(contactData.lastname);
    let popuppromise = page.waitForEvent('popup')
    await page.locator('//img[@title="Select"]').first().click();
    let popup = await popuppromise;
    await popup.waitForLoadState('load');
    await popup.locator('//a[text()="abc goods organization"]').click();
    console.log('organization selected successfully!');
    await page.locator('//input[@name="title"]').fill(contactData.title)
    await page.locator('//input[@name="department"]').fill(contactData.department)
    await page.locator('//input[@name="emailoptout"]').check()
    await page.locator('//input[@name="reference"]').check()
    await page.locator('//input[@name="portal"]').check()
    await page.locator('//img[@id="jscal_trigger_support_end_date"]').click()
    await page.locator('//td[@class="day selected weekend"]').click()
    await page.locator('//input[@name="imagename"]').setInputFiles('c:/Users/golla/Downloads/vtigercrm-5.4.0.zip')
    //await page.getByRole('button',{name:'Choose File'}).click()
    await page.locator('//input[@title="Save [Alt+S]"]').first().click();
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
    await page.getByRole('link',{name:'Sign Out'}).click();
    

});  

test('contact with pom and ddt',async ({page}) => {
    test.slow
    let signin = new login(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username,loginData.password)
    let contactcreation = new contact(page)
    await contactcreation.createcontactmethod(contactData.firstname,contactData.lastname,contactData.title)
})