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
        let result = ProviderList;
        if(args.filter != null)
        {
            const field = args.filter.fieldFilter;
            const value = args.filter.value;
            result =  _.filter(result, {[field] : value});
        }

        if(args.sortBy != null){
            const fieldName = args.sortBy.field;
            const order = args.sortBy.order;
            result = _.orderBy(result, [fieldName], [order]);
        }

        const count = result.length;

        const finalList = new Object();
        finalList.count = count;
        finalList.providers = result;

        return finalList;
      }
  },
  Provider: {
    patients: () => {
      return patientList
    },
  }
 
};

module.exports = { resolvers };