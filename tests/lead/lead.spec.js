import {test} from '@playwright/test'
import loginData from'../../testdata/login.json'
import leaddata from'../../testdata/lead.json'
import { login } from '../../pages/login';
import { lead } from '../../pages/lead';


test ('lead',async ({page}) => {
    await page.goto('http://localhost:8888/');
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('cell',{name:'Leads',exact:true}).click()
    await page.getByRole('img',{name:'Create Lead...'}).click()
    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'})
    await page.locator('//input[@name="firstname"]').fill('Nikhil')
    let firstname =  await page.locator('//input[@name="firstname"]').inputValue()
    await page.locator('//input[@name="lastname"]').fill('yadav')
    await page.locator('//input[@name="company"]').fill('testing')
    await page.locator('//input[@title="Save [Alt+S]"]').first().click()
    let fn=await page.locator('//span[@id="dtlview_First Name"]').textContent()
    console.log(fn);

    if(firstname===fn.trim(' ')){
        console.log('the lead is created');
    }else{
        console.log('the lead is not created');
    }
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link',{name:'Sign Out'}).click()
  })

  test('lead with ddt',async({page}) => {
    test.slow()
    await page.goto(loginData.url)
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password)
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('cell',{name:'Leads',exact:true}).click()
    await page.getByRole('img',{name:'Create Lead...'}).click()
    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'})
    await page.locator('//input[@name="firstname"]').fill(leaddata.firstname)
    let firstname =  await page.locator('//input[@name="firstname"]').inputValue()
    await page.locator('//input[@name="lastname"]').fill(leaddata.lastname)
    await page.locator('//input[@name="company"]').fill(leaddata.company)
    
  })

  test('lead with pom and ddt',async ({page}) => {
    test.slow
    let signin = new login(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username,loginData.password)
    let leadcreation = new lead(page)
    await leadcreation.createleadmethod(leaddata.firstname,leaddata.lastname,leaddata.company)
  })


  