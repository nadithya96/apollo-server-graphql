const { ProviderList, patientList } = require("../mockdata");
const { PrismaClient } = require("@prisma/client");
const _ = require("lodash");

const resolvers = {
  Query: {
    getProviders: () => {
        return ProviderList;
      }, 
      exactPatientSearch:(parent, args, context, info) =>{
      const firstName = args.firstName;
      
      return _.find(patientList, { firstName });
      },
      partialPatientSearch:(parent, args) =>{
        
        const firstName = args.firstName;
        const patient = patientList.filter(o => o.firstName.includes(firstName));
        return patient;
      }
  },
  Provider: {
    patients: () => {
      return patientList
    },
  }
 
};

module.exports = { resolvers };