module.exports = app =>{
    const register1 = require('../controllers/register1.controller.js');
    app.post ("/register1",register1.create);
    
    app.get ("/register1",register1.login);
   
}