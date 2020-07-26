import gql from "graphql-tag";

const createProduct = gql`
  mutation createProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      productId
    }
  }
`;

const addItemCart = gql`
  mutation addItemCart($input: AddItemInWishListOrCartInput) {
    addItemCart(input: $input) {
      createdTimestamp
    }
  }
`;

const removeItemFromCart = gql`
  mutation removeItemFromCart($productId: ID!, $userId: ID!) {
    removeItemFromCart(productId: $productId, userId: $userId) {
      statusId
    }
  }
`;

const addItemInWishList = gql`
  mutation addItemInWishList($input: AddItemInWishListOrCartInput) {
    addItemInWishList(input: $input) {
      createdTimestamp
    }
  }
`;
const changeProfilePic = gql`
  mutation changeProfilePic(
    $userId: ID!
    $picture: String!
    $type: PictureType
  ) {
    changeProfilePic(userId: $userId, picture: $picture, type: $type)
  }
`;

const sendFeedback = gql`
  mutation sendFeedback($input: FeedbackInput!) {
    sendFeedback(input: $input) {
      feedbackId
    }
  }
`;

const removeItemFromWishlist = gql`
  mutation removeItemFromWishlist($productId: ID!, $userId: ID!) {
    removeItemFromWishlist(productId: $productId, userId: $userId) {
      statusId
    }
  }
`;

const placeOrder = gql`
  mutation placeOrder($input: placeOrderInput!) {
    placeOrder(input: $input) {
      id
      amount
    }
  }
`;
const updateUserAttribute = gql`
  mutation updateUserAttribute($input: updateUserAttributeInput!) {
    updateUserAttribute(input: $input) {
      userId
    }
  }
`;
const updateProduct = gql`
  mutation updateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      productId
    }
  }
`;
const addProductPictures = gql`
  mutation addProductPictures($input: addProductPicturesInput) {
    addProductPictures(input: $input) {
      productId
      pictures {
        key
      }
    }
  }
`;
const deleteProductPicture = gql`
  mutation deleteProductPicture($productId: ID!, $pictureKey: String!) {
    deleteProductPicture(productId: $productId, pictureKey: $pictureKey) {
      title
      
    }
  }
`;

const showOrHideProduct = gql`
  mutation showOrHideProduct($productId: ID!, $userId: ID!) {
    showOrHideProduct(productId: $productId, userId: $userId) {
      productId
    }
  }
`;

export {
  createProduct,
  addItemCart,
  removeItemFromCart,
  addItemInWishList,
  sendFeedback,
  changeProfilePic,
  removeItemFromWishlist,
  placeOrder,
  updateUserAttribute,
  updateProduct,
  addProductPictures,
  deleteProductPicture,
  showOrHideProduct,
};
