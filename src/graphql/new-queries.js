import gql from "graphql-tag";

const getProductList = gql`
  query getProductList {
    getProductList {
      productId
      title
      amount
      pictures {
        key
        image
      }
      createdTimestamp
      type
      description
      company {
        userId
        companyName
      }
      isPublish
    }
  }
`;

const getProductListForSearch = gql`
  query getProductList {
    getProductList {
      productId
      title
      amount
      type
      description
      createdTimestamp
      isPublish
    }
  }
`;

const getCompanyProducts = gql`
  query getCompanyProducts($companyId: ID!, $userId: ID!) {
    getCompanyProducts(companyId: $companyId, userId: $userId) {
      productId
      title
      amount
      createdTimestamp
      pictures {
        key
        image
      }
      type
      description
      company {
        userId
        companyName
      }
      isPublish
    }
  }
`;

const getUserCart = gql`
  query getUserCart($userId: ID!) {
    getUserCart(userId: $userId) {
      statusId
      product {
        productId
        title
        description
        pictures {
          key
          image
        }
        createdTimestamp
        amount
        createdTimestamp
        isPublish
      }
    }
  }
`;
const getUserWishList = gql`
  query getUserWishList($userId: ID!) {
    getUserWishList(userId: $userId) {
      statusId
      product {
        productId
        title
        description
        pictures{
          key
          image
        }
        createdTimestamp
        amount
        createdTimestamp
        isPublish
      }
    }
  }
`;

const searchProducts = gql`
  query searchProducts($text: String, $userId: ID) {
    searchProducts(text: $text, userId: $userId) {
      productId
      title
      description
      amount
      createdTimestamp
      pictures{
          key
          image
      }
      company {
        userId
        companyName
      }
      isPublish
    }
  }
`;
const getProduct = gql`
  query getProduct($productId: ID!) {
    getProduct(productId: $productId) {
      title
      description
      amount
      createdTimestamp
      pictures{
          key
          image
      }
      company {
        companyName
        userId
      }
      isPublish
    }
  }
`;
const getUserById = gql`
  query getUserById($userId: ID!) {
    getUserById(userId: $userId) {
      picture
      announcement
      story
      policies
      banner
    }
  }
`;

export {
  getProductList,
  getCompanyProducts,
  getUserCart,
  getUserWishList,
  searchProducts,
  getProduct,
  getUserById,
  getProductListForSearch
};
