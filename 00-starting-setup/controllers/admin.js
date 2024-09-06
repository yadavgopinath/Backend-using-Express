const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editing:false 
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null,title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit;
  
 
  if(!editMode)
  {
    return res.redirect('/');
  }
  const prodId=req.params.productId;
  
  Product.findById(prodId,product=>{
  
    if(!product){
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/add-product',
       editing:true,
       product:product
  });

  });
};

exports.postEditProduct=(req,res,next)=>{
  console.log(req.body);
  const prodId =req.body.productId;
  const updatedTitle=req.body.title;
  const updatedPrice=req.body.price;
  const updatedImageUrl=req.body.imageUrl;
  const updateddesc=req.body.description;
  const updatedProduct =new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updateddesc,
    updatedPrice);
    updatedProduct.save();
    res.redirect('/admin/products');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct=(req,res,next)=>{
  const prodID=req.body.productId;
  console.log(prodID);
  Product.deleteById(prodID);
  res.redirect('/admin/products');

}
