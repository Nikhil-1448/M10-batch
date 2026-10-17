import { test } from "../../fixtures/fixture.js"
import salesorderdata from '../../testdata/salesorder.json'

test('salesorder with fixture',async ({salesorderdata}) => {
    await salesorder.createsalesordermethod(salesorderdata.subject,salesorderdata.bill_street,salesorderdata.ship_street)
    
})