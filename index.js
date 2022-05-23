const http = require("http"),
      axios = require("axios");

      //creating a server

      http.createServer((req, res)=>{
        res.write(users.join(", "));
        res.end()

      }).listen(8000);
      
      let users = [];
      
      (async function getNames(){
        try{
          const {data} = await axios.get ("https://jsonplaceholder.typicode.com/users");
            users = data.map(user=>user.name)
            
        }catch(error){
            console.log(error)
        }
        })()
