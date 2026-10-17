import { test } from "../../fixtures/fixture.js";
import opportunitydata from '../../testdata/opportunity.json'

test('opportunity with fixture',async({opportunity}) => {
    await opportunity.createopportunitymethod(opportunitydata.potentialname,opportunitydata.closingdate,opportunitydata.probability)
    
})