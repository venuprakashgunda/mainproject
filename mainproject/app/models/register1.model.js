const sql = require('./db.js');

const Register1 = function(register1){
    this.Name = register1.Name;
    this.mobile = register1.mobile;
    this.username = register1.username;
    this.password = register1.password;     
    this.email = register1.email;
    this.address = register1.address;
    
    
};

Register1.create = (newRegister1,result) => {
    sql.query('insert into register1 set ?',newRegister1,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created user : ",{id:res.insertedId,...newRegister1});
        return (null,{id:res.insertedId,...newRegister1});
    })
};
Register1.loginbyId = (id,register1,result) =>{
    sql.query('select username,password from register1 where username = ? and password = ? ',
    [register1.username,register1.password,id],(err,res) =>{
        if(err) { 
             console.log(err); 
            result(err,null); 
            return; 
           } 
           if(res.length) 
           { 
               console.log('found user', res[0]); 
               result(null,res[0]);
                return; 
               } 
           })
       };
module.exports = Register1;