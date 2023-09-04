const express = require('express');
const BrandController = require("../Controller/BrandController");
const CategoryController = require('../Controller/CategoryController');
const ProductController = require('../Controller/ProductController');
const UserController = require('../Controller/UserController');
const AuthVerification = require("../middleware/AuthVerification");
const ProfileController = require('../Controller/ProfileController');
const InvoiceController = require("../Controller/InvoiceController")
const router = express.Router();

//brand router
router.get('/brand', BrandController.BrandList);

//category
router.get('/category', CategoryController.CategoryList);

// Product
router.get('/SliderList',ProductController.SliderList)
router.get('/ListByCategory',ProductController.ListByCategory)
router.get('/ListBySmilier',ProductController.ListBySmilier)
router.get('/ListByBrand',ProductController.ListByBrand)
router.get('/ListByKeyword',ProductController.ListByKeyword)
router.get('/ListReview',ProductController.ListReview)
router.get('/ProductDetails',ProductController.ProductDetails)
router.get('/ListByRemark',ProductController.ListByRemark)
router.get('/WishList',ProductController.WishList)
router.get('/CreateWishList',ProductController.CreateWishList)
router.get('/RemoveWishList',ProductController.RemoveWishList)
router.get('/CartList',ProductController.CartList)
router.get('/CreateCartList',ProductController.CreateCartList)
router.get('/RemoveCartList', ProductController.RemoveCartList)

// User
router.post("/UserLogin/:email", UserController.UserLogin);
router.get("/VerifyLogin/:email/:otp", UserController.VerifyLogin);
router.get('/UserLogout',UserController.UserLogout);


// Profile
router.post('/CreateProfile',AuthVerification,ProfileController.CreateProfile)
router.get('/ReadProfile',AuthVerification,ProfileController.ReadProfile)
router.post('/UpdateProfile',AuthVerification,ProfileController.UpdateProfile)


// Invoice
router.post('/InvoiceCreate',AuthVerification,InvoiceController.InvoiceCreate)
router.get('/InvoiceList',AuthVerification,InvoiceController.InvoiceList)
router.get('/InvoiceProductList',AuthVerification,InvoiceController.InvoiceProductList)
router.get('/PaymentSuccess',InvoiceController.PaymentSuccess)
router.get('/PaymentCancel',InvoiceController.PaymentCancel)
router.get('/PaymentFail',InvoiceController.PaymentFail)
router.get('/PaymentIPN',InvoiceController.PaymentIPN)


module.exports = router;