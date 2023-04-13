const { gql } = require("apollo-server");

const typeDefs = gql`
  
#Schema definition go here

type Query {
     "Get providers array"
     providers: [Provider!]!
    
   }

"Provider information"
type Provider{
   firstName: String!
   lastName: String!
   npi: String!
   state: String!
   patients : [Patient]
}

"Patient can have more than one prescription prescribed by different providers"
   type Patient {
     id: ID!
     lastName: String!
     firstName: String!
     emailId: String!
     state: String!
     prescriptions: [Prescription]
   }

   "Prescription associated with patient"
   type Prescription {
     id: ID!
     name: String!
     prescribedDate: String
     state: State!
     quantity: Int
     daySuppy: Int
   }

"Prescription state"
enum State{
   INACTIVE
   ACTIVE
   DONE
}
 
`;

module.exports = { typeDefs };
