/**
 * In this file, we present some util methods that will be used in our project to access the OrangeHRM API
 */

import axios from 'axios';
import qs from 'querystring';

const baseUrl = 'https://sepp-hrm.inf.h-brs.de/symfony/web/index.php';
let accessToken = null;     // token will be defined during the auth

/** stringify the body to send for auth */
const body = qs.stringify({
    client_id: 'api_oauth_id',
    client_secret: 'oauth_secret',
    grant_type: 'password',
    username: 'demouser',
    password: '*Safb02da42Demo$'
});

/** first config for auth */
let config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    }
};

/** sending auth request to store token */
const res = await axios.post(`${baseUrl}/oauth/issueToken`, body, config);
if (res.data.error) {
    throw Error(res.data.error);
}

/** saving token for later requests */
accessToken = res.data['access_token'];

/** redefining config for later requests */
config = {
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Typ': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    }
};

/** getting list of all employees */
const res_le = await axios.get(`${baseUrl}/api/v1/employee/search`, config);
const list_employees = res_le.data;
console.log(list_employees);

/** saving bonus salary */
const bonus_body = qs.stringify({
    year: 2021,
    value: 2500
});
const employee_id = 2;
const bonus_res = await axios.post(`${baseUrl}/api/v1/employee/${employee_id}/bonussalary`, bonus_body, config);
//console.log(bonus_res.data);