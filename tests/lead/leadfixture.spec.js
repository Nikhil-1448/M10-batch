import {test} from '../../fixtures/fixture.js'
import leaddata from '../../testdata/lead.json'

test ('lead with fixture',async ({lead}) =>{
    await lead.createleadmethod(leaddata.firstname,leaddata.lastname,leaddata.company)

})