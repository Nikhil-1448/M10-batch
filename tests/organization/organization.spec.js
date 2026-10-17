import {test} from '@playwright/test'
import loginData from '../../testdata/login.json'
import organizationData from '../../testdata/organization.json'
import { login } from '../../pages/login';
import { organization } from '../../pages/organization';

test ('organization', async({page}) => {
    await page.goto('http://localhost:8888/');
    await page.locator('//input[@name="user_name"]').fill('admin');
    await page.locator('//input[@name="user_password"]').fill('admin');
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('cell',{name:'Organizations',exact:true}).click();
    await page.getByRole('img',{name:'Create Organization...'}).click();
    await page.locator('//input[@name="accountname"]').fill('abc goods organization');
    await page.locator('//input[@name="website"]').fill('www.abcgoods.com');
    await page.locator('//input[@name="tickersymbol"]').fill('ABC');
    await page.locator('//input[@name="employees"]').fill('100');
    await page.locator('//input[@name="email2"]').fill('abc@gmail.com');
    await page.locator('//select[@name="industry"]').selectOption({label:'Food & Beverage'});
    await page.locator('//select[@name="accounttype"]').selectOption({label:'Customer'});
    await page.locator('//input[@name="emailoptout"]').check();
    await page.locator('//input[@name="phone"]').fill('123456789');
    await page.locator('//input[@name="fax"]').fill('2223355');
    await page.locator('//input[@name="otherphone"]').fill('9876543210');
    await page.locator('//input[@name="email1"]').fill('huyt32165@gmail.com');
    await page.locator('//input[@name="ownership"]').fill('private');
    await page.locator('//select[@name="rating"]').selectOption({label:'Acquired'});
    await page.locator('//input[@name="siccode"]').fill('321654');
    await page.locator('//input[@name="annual_revenue"]').fill('20lakh');
    await page.locator('//input[@name="notify_owner"]').check();
    await page.locator('//textarea[@name="bill_street"]').fill('98/25 main street');
    await page.locator('//input[@name="bill_pobox"]').fill('po box 100');
    await page.locator('//input[@name="bill_city"]').fill('hyderabad');
    await page.locator('//input[@name="bill_state"]').fill('Telangana');
    await page.locator('//input[@name="bill_code"]').fill('555321');
    await page.locator('//input[@name="bill_country"]').fill('india');
    await page.locator('//input[@onclick="return copyAddressLeft(EditView)"]').check(); 
    await page.locator('//textarea[@name="bill_street"]').fill('98/25 main street');
    await page.locator('//input[@name="bill_pobox"]').fill('po box 100');
    await page.locator('//input[@name="bill_city"]').fill('hyderabad');
    await page.locator('//input[@name="bill_state"]').fill('Telangana');
    await page.locator('//input[@name="bill_code"]').fill('555321');
    await page.locator('//input[@name="bill_country"]').fill('india');
    await page.locator('//input[@title="Save [Alt+S]"]').first().click();
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
    await page.getByRole('link',{name:'Sign Out'}).click();
})

test ('oragnization with ddt', async({page}) => {
    await page.goto(loginData.url);
    await page.locator('//input[@name="user_name"]').fill(loginData.username);
    await page.locator('//input[@name="user_password"]').fill(loginData.password);
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('cell',{name:'Organizations',exact:true}).click();
    await page.getByRole('img',{name:'Create Organization...'}).click();
    await page.locator('//input[@name="accountname"]').fill(organizationData.accountname);
    await page.locator('//input[@name="website"]').fill(organizationData.website);
    await page.locator('//input[@name="tickersymbol"]').fill(organizationData.tickersymbol);
     await page.locator('//input[@name="employees"]').fill(organizationData.employees);
     await page.locator('//input[@name="email2"]').fill(organizationData.email2);
     await page.locator('//select[@name="industry"]').selectOption({label:'Food & Beverage'});
     await page.locator('//select[@name="accounttype"]').selectOption({label:'Customer'});
     await page.locator('//input[@name="emailoptout"]').check();
     await page.locator('//input[@name="phone"]').fill(organizationData.phone);
     await page.locator('//input[@name="fax"]').fill(organizationData.fax);
     await page.locator('//input[@name="otherphone"]').fill(organizationData.otherphone);
     await page.locator('//input[@name="email1"]').fill(organizationData.email1);

})

test('organization with pom and ddt',async ({page}) => {
    test.slow
    let signin = new login(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username,loginData.password)
    let organizationcreation = new organization(page)
    await organizationcreation.createorganizationmethod(organizationData.accountname,organizationData.website,organizationData.tickersymbol)
})





  