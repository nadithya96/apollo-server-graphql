const { ProviderList, patientList } = require("../mockdata");
const { PrismaClient } = require("@prisma/client");
const _ = require("lodash");

const resolvers = {
  Query: {
    providers: () => {
        return ProviderList;
      }, 
      exactPatientName:(parent, args, context, info) =>{
      const firstName = args.firstName;
      
      return _.find(patientList, { firstName });
      },
      patients:(parent, args) =>{
        
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