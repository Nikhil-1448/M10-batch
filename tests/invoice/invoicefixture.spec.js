import { test } from "../../fixtures/fixture.js"
import invoicedata from '../../testdata/invoice.json'

test('invoice with fixture',async({invoice}) => {
    await invoice.createinvoicemethod(invoicedata.subject,invoicedata.bill_street,invoicedata.ship_street)
    
})