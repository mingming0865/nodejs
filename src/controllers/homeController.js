const connection = require('../config/database')

const getHomepage = (req, res) => {

    return res.render('home.ejs')


}
const getABC = (req, res) => {
    res.send('check ABC')
}

const getNguyenMan = (req, res) => {
    // res.send('<h1> Nguyen Man </h1>')
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getNguyenMan
}

