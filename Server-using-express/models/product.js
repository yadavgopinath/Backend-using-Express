
const fs=require('fs');
const path=require('path');
const rootdir=require('../util/path');
const p=path.join(rootdir,'data','product.json');
const getproductfromfile =cb=>{
    
    fs.readFile(p,(err,fileContent)=>{
        if(err)
        {
            cb([]);
        }else{
        cb( JSON.parse(fileContent));
        }
    })


}
module.exports=class Product{
    constructor(t){
        this.title=t;
    }
    save(){
       
     getproductfromfile(products=>{
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
          console.log(err);
     });
        
        });   
    }
    static fetchAll(cb)
    {
        getproductfromfile(cb);
    }
}