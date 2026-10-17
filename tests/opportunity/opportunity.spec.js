import {test} from '@playwright/test'
import loginData from '../../testdata/login.json'
import opportunityData from '../../testdata/opportunity.json'
import { login } from '../../pages/login';
import { opportunity } from '../../pages/opportunity';


// test ('opportunity', async({page}) => {
//     await page.goto('http://localhost:8888/');
//     await page.locator('//input[@name="user_name"]').fill('admin');
//     await page.locator('//input[@name="user_password"]').fill('admin');
//     await page.getByRole('button',{name:'Login'}).click();
//     await page.getByRole('link',{name:'OPPORTUNITIES'}).click()
//     await page.locator('//img[@alt="Create Opportunity..."]').click()
//     await page.locator('//input[@name="potentialname"]').fill('Test opportunity')
//     await page.locator('//select[@id="related_to_type"]').selectOption({label:'Organizations'})
//     await page.locator('//select[@name="opportunity_type"]').waitFor();
//     await page.locator('//select[@name="opportunity_type"]').selectOption({label:'New Business'})
//     await page.locator('//select[@name="leadsource"]').selectOption({label:'Cold Call'})
//     await page.locator('//select[@name="assigned_user_id"]').selectOption({label:' Administrator'})
//     await page.locator('//input[@name="amount"]').fill('5000')
//     await page.locator('//input[@name="closingdate"]').fill('2026-10-01')
//     await page.locator('//input[@name="nextstep"]').fill('next step')
//     await page.locator('//input[@name="probability"]').fill('59')
//     await page.locator('//select[@name="sales_stage"]').selectOption({label:'Qualification'})
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click();
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
//     await page.getByRole('link',{name:'Sign Out'}).click();


// });

test ('opportunity', async({page}) => {
    await page.goto('http://localhost:8888/');
    await page.locator('//input[@name="user_name"]').fill(loginData.username);
    await page.locator('//input[@name="user_password"]').fill(loginData.password);
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name:'OPPORTUNITIES'}).click()
    await page.locator('//img[@alt="Create Opportunity..."]').click()
    await page.locator('//input[@name="potentialname"]').fill(opportunityData.potentialname)
    await page.locator('//select[@id="related_to_type"]').selectOption({label:'Organizations'})
    await page.locator('//select[@name="opportunity_type"]').waitFor();
    await page.locator('//select[@name="opportunity_type"]').selectOption({label:'New Business'})
    await page.locator('//select[@name="leadsource"]').selectOption({label:'Cold Call'})
    await page.locator('//select[@name="assigned_user_id"]').selectOption({label:' Administrator'})
    await page.locator('//input[@name="amount"]').fill(opportunityData.amount)
    await page.locator('//input[@name="closingdate"]').fill(opportunityData.closingdate)
    await page.locator('//input[@name="nextstep"]').fill(opportunityData.nextstep)
    await page.locator('//input[@name="probability"]').fill(opportunityData.probability)
    await page.locator('//select[@name="sales_stage"]').selectOption({label:'Qualification'})
    await page.locator('//input[@title="Save [Alt+S]"]').first().click();
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
    await page.getByRole('link',{name:'Sign Out'}).click();


});

test.only('opportunity with pom and ddt',async ({page})  =>{
    test.slow
    let signin = new login
    await signin.launch(loginData.url)
    await signin.action(loginData.username,loginData.password)
    let opportunitycreation = new opportunity(page)
    await opportunitycreation.createopportunitymethod(opportunityData.potentialname,opportunityData.closingdate,opportunityData.probability)
})

