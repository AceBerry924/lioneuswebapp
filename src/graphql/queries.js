import gql from "graphql-tag";

export default {
      OFFERING: gql`
      query Offering($id: ID!){
        Offering(id: $id) {
        id
        type
        title
        description
        pictures
        price
        business {
          businessName
          businessPhone
          businessEmail
          year
          businessAddess
        }
      }
    }`,
    OFFERINGS: gql`
    query Offering($query: String!){
      Offerings(query: $query) {
      id
      type
      title
      description
      pictures
      price
    }
  }`,
}