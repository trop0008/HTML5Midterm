/*****************************************************************
Author: Marjan Tropper
Description: 
    MAD9135 - HTML5 Midterm Assingment
    
Version: 1.0.0
Updated: Dec 07, 2017

*****************************************************************/

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//change the first letter of each word to uppercase
function upperCaseWords(text){
    return text.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//function to format name
export function formatName({title = 'empty', first = 'empty', last = 'empty'} , withTitle = false){
    let fullName = '';
    if (withTitle) {
        fullName =  upperCaseWords(title) + ' ';
    }
    fullName += upperCaseWords(first) + ' ' + upperCaseWords(last);
    
    return fullName;
}

//function to format Date of Birth
export function formatDOB(dob = '1900-01-01 00:00:01'){
    let date = new Date(dob);
    return months[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();
}

//function t0 format address
export function address({street = 'empty', city = 'empty', state = 'empty', postcode = 0}, line = 1){
    switch(line){
    case 1:
        return upperCaseWords(street);
    case 2:
        return upperCaseWords(city) + ', ' + upperCaseWords(state);
    case 3:
        return postcode;
    }
}

// calculate the age
export function calculateAge(dob = '1900-01-01 00:00:01'){
    let date = new Date(dob);
    let now = new Date(Date.now());
    return Math.abs(now.getFullYear() - date.getFullYear());
    
    
}

// funtion only capitalizes the first letter of the first word
export function capitalizeFirst(word) {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
}