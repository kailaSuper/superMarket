const db = require('../models/index');
const Customer = db.customer;


class UsersDataAccessor{

//checked๐
logIn=async(user_name)=>{
    return await Customer.findOne({where:{user_name:user_name}})

}

// getPasssword=async(email)=>{//ืืฉืืื ืืช ืืืืจื ืืื ืืืืืืจ
//     return await Customer.find({
//         where: {
//             email: email    
//         }
//     }) 
// }
//checked๐
register=async(first_name,last_name,user_name,password,email,phone_number1,phone_number2,address)=>{
    
    return await Customer.create({
        
        first_name:first_name,
        last_name:last_name,
        user_name:user_name,
        password:password,
        email:email,
        phone_number1:phone_number1,
        phone_number2:phone_number2,
        address: address
    })
}
//checked๐
checkIfExists=async(user_name)=>{
    return await Customer.findOne({where:{user_name:user_name}})
}


//checked ๐
updatePersonalDetails=async(customer_id,detailsToUpdate)=>{
    await Customer.update(detailsToUpdate,{
        where:{customer_id:customer_id}}
)}

}



const usersDataAccessor = new UsersDataAccessor();
module.exports = usersDataAccessor;