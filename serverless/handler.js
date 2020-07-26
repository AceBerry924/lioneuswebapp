'use strict';
const { preSignUp } = require("./controller/preSignUp")
const { getUserById } = require("./controller/getUserById")
const { changeProfilePic } = require("./controller/changeProfilePic")
const { getUserProfilePicture } = require("./controller/getUserProfilePicture")
const { updateUserAttribute } = require("./controller/updateUserAttribute")
const { postSignUp } = require("./controller/postSignUp")
const { customizeAuthMsg } = require("./controller/customizeAuthMsg")

// Product
const { createProduct } = require("./controller/createProduct")
const { getProductList } = require("./controller/getProductList")
const { getProduct } = require("./controller/getProduct")
const { deleteProduct } = require("./controller/deleteProduct")
const { getProductPics } = require("./controller/getProductPics")
const { getCompanyProducts } = require("./controller/getCompanyProducts")
const { searchProducts } = require("./controller/searchProducts")
const { getProductsByIds } = require("./controller/getProductsByIds")
const { getProductReviews } = require("./controller/getProductReviews")
const { updateProduct } = require("./controller/updateProduct")
const { deleteProductPicture } = require("./controller/deleteProductPicture")
const { addProductPictures } = require("./controller/addProductPictures")

const { placeOrder } = require("./controller/placeOrder")
const { postPlaceOrder } = require("./controller/postPlaceOrder")
const { getMyOrders } = require("./controller/getMyOrders")
const { addProductReview } = require("./controller/addProductReview")
const { getOrderById } = require("./controller/getOrderById")

const { sendFeedback } = require("./controller/sendFeedback")
const { jwtAuthentication } = require("./controller/jwtAuthentication")

const { addItemInWishList } = require("./controller/addItemInWishList")
const { getUserWishList } = require("./controller/getUserWishList")
const { removeItemFromWishlist } = require("./controller/removeItemFromWishlist")

const { addItemInCart } = require("./controller/addItemInCart")
const { removeItemFromCart } = require("./controller/removeItemFromCart")
const { getUserCart } = require("./controller/getUserCart")
const { onRemoveCartOrWishlistItem } = require("./controller/onRemoveCartOrWishlistItem")

// const { sentryTest } = require("./controller/sentryTest")


module.exports.preSignUp = async (event, context, callback) => {
  return preSignUp(event, context, callback);
}

module.exports.getUserById = async (event, context, callback) => {
  return getUserById(event, context, callback);
}

module.exports.changeProfilePic = async (event) => {
  return changeProfilePic(event);
}

module.exports.getUserProfilePicture = async (event) => {
  return getUserProfilePicture(event);
}

module.exports.updateUserAttribute = async (event) => {
  return updateUserAttribute(event);
}

module.exports.postSignUp = async (event, context, callback) => {
  return postSignUp(event, context, callback);
}

module.exports.customizeAuthMsg = async (event, context, callback) => {
  return customizeAuthMsg(event, context, callback);
}

module.exports.sendFeedback = async event => {
  return sendFeedback(event);
}

module.exports.createProduct = async event => {
  return createProduct(event);
}

module.exports.getProductList = async event => {
  return getProductList(event);
}

module.exports.getProduct = async event => {
  return getProduct(event);
}

module.exports.deleteProduct = async event => {
  return deleteProduct(event);
}

module.exports.getProductPics = async event => {
  return getProductPics(event);
}

module.exports.getCompanyProducts = async event => {
  return getCompanyProducts(event);
}

module.exports.getProductReviews = async event => {
  return getProductReviews(event);
}

module.exports.updateProduct = async event => {
  return updateProduct(event);
}

module.exports.deleteProductPicture = async event => {
  return deleteProductPicture(event);
}

module.exports.addProductPictures = async event => {
  return addProductPictures(event);
}

module.exports.placeOrder = async event => {
  return placeOrder(event);
}

module.exports.postPlaceOrder = async (event, context, callback) => {
  return postPlaceOrder(event, context, callback);
}

module.exports.getMyOrders = async event => {
  return getMyOrders(event);
}

module.exports.addProductReview = async event => {
  return addProductReview(event);
}

module.exports.getOrderById = async event => {
  return getOrderById(event);
}

module.exports.searchProducts = async event => {
  return searchProducts(event);
}

module.exports.getProductsByIds = async event => {
  return getProductsByIds(event);
}

module.exports.addItemInWishList = async event => {
  return addItemInWishList(event);
}

module.exports.getUserWishList = async event => {
  return getUserWishList(event);
}

module.exports.removeItemFromWishlist = async event => {
  return removeItemFromWishlist(event);
}

module.exports.addItemInCart = async event => {
  return addItemInCart(event);
}

module.exports.removeItemFromCart = async event => {
  return removeItemFromCart(event);
}

module.exports.getUserCart = async event => {
  return getUserCart(event);
}

module.exports.onRemoveCartOrWishlistItem = async event => {
  return onRemoveCartOrWishlistItem(event);
}

module.exports.jwtAuthentication = async event => {
  return jwtAuthentication(event);
}

// module.exports.sentryTest = async event => {
//   return sentryTest(event);
// }