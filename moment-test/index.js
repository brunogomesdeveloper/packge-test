var moment = require('moment');


init()


function init(){

    try {
        
        let now  = moment()
        console.log(`Now : ${now}`)


        let validDate  = moment("01-25-1995", "MM-DD-YYYY").isValid();
        console.log(`validDate : ${validDate}`)


        let date  = moment();
        console.log(`Date day : ${date.day()}`)
        console.log(`Date month : ${date.month()}`)
        console.log(`Date year : ${date.year()}`)
        console.log(`Date weekday : ${date.weekday()}`)
        console.log(`Date isoWeekday : ${date.isoWeekday()}`)

    } catch (error) {
        console.error(error)
    }


}