import {test as base} from './login.js'
import { lead } from '../pages/lead.js'
import { organization } from '../pages/organization.js'
import { contact } from '../pages/contact.js'
import { opportunity } from '../pages/opportunity.js'
import { product } from '../pages/product.js'
import { quote } from '../pages/quote.js'
import { salesorder } from '../pages/salesorder.js'
import { invoice } from '../pages/invoice.js'




export let test = base.extend({
    lead : async ({loginfixture},use) => {
        let leadobj = new lead(loginfixture)
        use(leadobj)
    },
    organization: async ({loginfixture},use) => {
        let organizationobj = new organization(loginfixture)
        use(organizationobj)
    },
    contact: async ({loginfixture},use) => {
        let contactobj = new contact(loginfixture)
        use(contactobj)
    },
    opportunity: async ({loginfixture},use) => {
        let opportunityobj = new opportunity(loginfixture)
        use(opportunityobj)
    },
    product : async ({loginfixture},use) => {
        let productobj = new product(loginfixture)
        use(productobj)
    },
    quote : async ({loginfixture},use) => {
        let quoteobj = new quote(loginfixture)
        use(quoteobj)
    },
    salesorder : async ({loginfixture},use) => {
        let salesorderobj = new salesorder(loginfixture)
        use(salesorderobj)
    },
    invoice : async ({loginfixture},use) => {
        let invoiceobj = new invoice(loginfixture)
        use(invoiceobj)
    }
    
})
