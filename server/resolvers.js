//const { ProviderList, patientList } = require("../mockdata");
const asyncHandler = require("express-async-handler");
const axios = require('axios');
const _ = require("lodash");

const resolvers = {
  Query: {
    getProviders: () => {
        return getProviderList();
      },

      exactPatientSearch:(parent, args, context, info) =>{
      const firstName = args.firstName;
      return new Promise((resolve,rejecj)=>{
        getPatientList().then((result) =>{
        const res = _.find(result, { firstName });
        resolve(res);
        });
      })
      },

      partialPatientSearch:(parent, args) =>{
        
          const firstName = args.firstName;
          return new Promise((resolve,rejecj)=>{
          getPatientList().then((result) =>{
          const res = result.filter(o => o.firstName.includes(firstName));
          resolve(res);
          });
        })
      },

      getProvidersWithArg: (parent, args, context, info) => {
              let result = getProviderList();
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
     return getPatientList();
    },
  }
 
};

const getProviderList = asyncHandler(async (req, res) => {
  try{

    let resp = await axios.get('http://localhost:8083/graphql/getProviderList');
    return resp.data;
  }
  catch(err) {
    console.log("Error mesg",err);
  }
 });

 const getPatientList = asyncHandler(async (req, res) => {
  try{
    let res=[];
    await axios.get('http://localhost:8083/graphql/getPatientList').then(finalres=>{
    res = finalres.data;
  });
  return res;
  }
  catch(err) {
    console.log("Error mesg",err);
  }
 });

module.exports = { resolvers };