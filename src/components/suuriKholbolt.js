import base64 from 'base-64'
import axios from 'axios';
import axiosCancel from "axios-cancel";  
import {isArray,isObject} from 'lodash'

axiosCancel(axios)
var serveriinMedeelel = "localhost:3000";

export const axs_kholbolt = (uilchilgeeniiNer, damjuulakhUtga, fileTokhirgoo, khuleekhKhugatsaa) => {
    return new Promise(function (resolve, reject) {
        axs_kholboltEkhluulekh(uilchilgeeniiNer, damjuulakhUtga, fileTokhirgoo, khuleekhKhugatsaa, resolve);
    });
};

const axs_kholboltEkhluulekh = (uilchilgeeniiNer, damjuulakhUtga, fileTokhirgoo, khuleekhKhugatsaa, resolve) => {
    
    let baseURL = `http://${serveriinMedeelel}/${uilchilgeeniiNer}`; 
    let isString = (typeof damjuulakhUtga) === 'string';
    let contentType = isString ? 'text/plain; charset=utf-8' : (fileTokhirgoo === true) ? 'multipart/form-data' : 'application/json; charset=utf-8';
    let option = {
        headers: {
            "Cache-Control": "no-cache",
            "Accept": "application/json",
            "Content-Type": `${contentType}`,
            //"Authorization": `Bearer ${nevtrekhEsekh ? global.ibi_nevtrekhErkh_token : global.ibi_undsenErkh_token}`, 
        },
        timeout: fileTokhirgoo ? 3000000 : isNullOrUndefined(khuleekhKhugatsaa) ? 30000 : khuleekhKhugatsaa,
    };

    if (objectEsekh(fileTokhirgoo)) option = { ...option, ...fileTokhirgoo };
    
    if (param === null || param === undefined || param === "") param = " "; 
    axios.post(baseURL, isString || fileTokhirgoo == true ? param : JSON.stringify(param), option)
    .then((response) => { 
        resolve(response.data); 
    })
    .catch((error) => {
        let aldaa = !isNullOrUndefined(error.response?.data?.aldaa) ? error.response?.data?.aldaa : error.response?.data?.error
        console.log('aldaa', aldaa)
    });
};

export function objectEsekh(value) {
    return isObject(value)
}

export function isNullOrUndefined(value) {
    return value === null || value === undefined
}