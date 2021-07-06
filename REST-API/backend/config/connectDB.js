const mongoose = require('mongoose');

// function connectDB() {
//     mongoose
//       .connect(process.env.MONGO_URL, {
//           useUnifiedTopology:true,
//           useNewUrlParser:true,
//       })
//       .then(()=>console.log("DB Connected"))
//       .catch((err)=>console.error(err));
// }
// module.exports=connectDB;
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{  
                      useUnifiedTopology:true,
                      useNewUrlParser:true,
                      useFindAndModify:false
          }
        );
       console.log("db CONNECTED");
     }catch (error) {
         console.error(error)
     }
};
    module.exports=connectDB;














































        
        
      
    
