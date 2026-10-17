import { test } from "../../fixtures/fixture.js"
import quotedata from '../../testdata/quote.json'

test('quote with fixture',async ({quote}) => {
    await quote.createquotemethod(quotedata.subject,quotedata.carrier,quotedata.quotestage)
})