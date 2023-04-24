const { ProviderList, patientList } = require("../mockdata");
const { PrismaClient } = require("@prisma/client");
const _ = require("lodash");

const resolvers = {
  Query: {
    getProviderList: () => {
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
      },
      getProvidersWithArg: (parent, args, context, info) => {
        const result = ProviderList;
        if(args.filter != null)
        {
            const fieldName = args.filter;

            return _.find(result, {fieldName} );
        }

        if(args.sortBy != null){
            const fieldName = args.sortBy.field;
            const order = args.sortBy.order;
            return _.orderBy(result, [fieldName], [order]);
        }

        return result;
      }
  },
  Provider: {
    patients: () => {
      return patientList
    },
  }
 
};

module.exports = { resolvers };