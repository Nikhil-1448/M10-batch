import { test } from "../../fixtures/fixture.js";
import organisationdata from '../../testdata/organization.json'

test('organization with fixture',async({organization}) => {
    await organization.createorganizationmethod(organisationdata.accountname,organisationdata.website,organisationdata.tickersymbol)
})
