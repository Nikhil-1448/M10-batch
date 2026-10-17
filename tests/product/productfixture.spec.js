import { test } from "../../fixtures/fixture.js"
import productdata from '../../testdata/product.json'

test('products with fixture',async ({product}) => {
    await product.createproductmethod(productdata.productname,productdata.productcategory,productdata.glacct)
})