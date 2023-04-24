const patientList = [
    {
        id: 1,
        lastName: "Dahlia",
        firstName: "Short",
        emailId: "Dahlia@gmail.com",
        state: "ACTIVE",
        prescriptions: [
            {
                id: 1,
                name: "Azithromycin",
                prescribedDate: "10/10/2022",
                state: "ACTIVE",
                quantity: 20,
                daySuppy: 10
            },
            {
                id: 2,
                name: "Amoxicillin",
                prescribedDate: "02/05/2022",
                state: "ACTIVE",
                quantity: 25,
                daySuppy: 5
            }
        ]
    },
    {
        id: 2,
        lastName: "Brenton",
        firstName: "Thompson",
        emailId: "Thompson@gmail.com",
        state: "ACTIVE",
        prescriptions: [
            {
                id: 1,
                name: "Ativan",
                prescribedDate: "11/11/2022",
                state: "INACTIVE",
                quantity: 30,
                daySuppy: 15
            },
            {
                id: 2,
                name: "Adderall",
                prescribedDate: "09/07/2022",
                state: "ACTIVE",
                quantity: 15,
                daySuppy: 5
            }
        ]
    },
    {
        id: 3,
        lastName: "Maxim",
        firstName: "Hutchinson",
        emailId: "Maxim@gmail.com",
        state: "ACTIVE",
        prescriptions: [
            {
                id: 1,
                name: "Atorvastatin",
                prescribedDate: "01/03/2023",
                state: "DONE",
                quantity: 12,
                daySuppy: 4
            }
        ]
    }
];

const ProviderList = [
    {
        firstName: "A",
        lastName: "Reynolds",
        npi: "65364563546",
        state: "ACTIVE",
        },
        {
                firstName: "B",
                lastName: "Reynolds",
                npi: "65364563546",
                state: "ACTIVE",
                }
        ];



  
  module.exports = { ProviderList, patientList };
  