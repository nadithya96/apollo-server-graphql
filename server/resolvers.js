const { ProviderList,patientList } = require("../mockdata");
const _ = require("lodash");

const resolvers = {
  Query: {
    providers: () => {
        return ProviderList;
      },      
  },
  Provider: {
    patients: () => {
      return patientList
    },
  }
 
};

module.exports = { resolvers };