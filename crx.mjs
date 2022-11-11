import axios from 'axios'

const baseUrl = 'https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX';
const acountStdPath = 'org.opencrx.kernel.account1/provider/CRX/segment/Standard'
const contractStdPath = 'org.opencrx.kernel.contract1/provider/CRX/segment/Standard'
const productStdPath = 'org.opencrx.kernel.product1/provider/CRX/segment/Standard'


/** credentials */
const credentials = {
    username: 'guest',
    password: 'guest',
};

/** config */
const config = {
    headers: { 'Accept': 'application/json' },
    auth: credentials,
};

/** getting list of all contacts */
const contacts = await axios.get(`${baseUrl}/${acountStdPath}/account`, config);
//console.log(contacts.data.objects);

/** getting one contact */
const telekom = await axios.get(`${baseUrl}/${acountStdPath}/account/97NB4O91UQORTH2MA4T2TYJFL`, config);
console.log(telekom.data);

/** getting list of all sales orders */
const salesOrders = await axios.get(`${baseUrl}/${contractStdPath}/salesOrder`, config);
//console.log(salesOrders.data.objects);

/** getting the sales order with the ID  */
const salesOrder = await axios.get(`${baseUrl}/${contractStdPath}/salesOrder/9DTSXR06DLHPM0EBHQA5MAZ7J`, config);
//console.log(salesOrder.data);

/** getting list of all products */
const products = await axios.get(`${baseUrl}/${productStdPath}/product`, config);
//console.log(products.data.objects);

/** More API paths can be found in the app https://sepp-crm.inf.h-brs.de ==> Wizards ==> Explore API... */