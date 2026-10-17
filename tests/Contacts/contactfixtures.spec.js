import { test } from "../../fixtures/fixture.js";
import contactdata from '../../testdata/contact.json'

test('contact with fixture',async ({contact}) => {
    await contact.createcontactmethod(contactdata.firstname,contactdata.lastname,contactdata.title)
})