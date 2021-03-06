//customer data 
const data = [
    {
        "payment": {
            "vendor": {
                "name": "Amazon Web Service, Inc.",
                "address": "410 Terry Avenue North",
                "address2": "",
                "city": "Seattle",
                "state": "WA",
                "zip": "98109-5210",
                "industry": "Computer Integrated Systems Design"
            },
            "remittance": [
                {
                    "invoice_number": "inv# 509193",
                    "invoice_date": "2020-09-07",
                    "description": "premium support",
                    "amount": 4000
                },
                {
                    "invoice_number": "inv# 939032",
                    "invoice_date": "2020-09-10",
                    "description": "hosting fees",
                    "amount": 6000
                }
            ]
        }
    },
    {
        "payment": {
            "vendor": {
                "name": "Tazza",
                "address": "1244 Alverser Plaza,",
                "address2": "",
                "city": "Midlothian",
                "state": "VA",
                "zip": "23113",
                "industry": "Restaurant"
            },
            "remittance": {
                "invoice_number": "20201205",
                "invoice_date": "2020-12-05",
                "description": "Holiday Party",
                "amount": 3200.45
            }
        }
    },
    {
        "payment": {
            "vendor": {
                "name": "Apple",
                "address": "One Infinite Loop",
                "address2": "",
                "city": "Cupertino",
                "state": "CA",
                "zip": "95014",
                "industry": "Software Services"
            },
            "remittance": [
                {
                    "invoice_number": "abcde-1001",
                    "invoice_date": "2020-12-20",
                    "description": "iPhone Xs for staff",
                    "amount": 8020.45
                }
            ]
        }
    },
    {
        "payment": {
            "vendor": {
                "name": "Microsoft",
                "address": "One Microsoft Way",
                "address2": "Suite 1#",
                "city": "Redmond",
                "state": "WA",
                "zip": "98052",
                "industry": "Software Services"
            },
            "remittance": [
                {
                    "invoice_number": "0192-5096",
                    "invoice_date": "2020-12-20",
                    "description": "Microsoft monthly fees | IT",
                    "amount": 900.99
                },
                {
                    "invoice_number": "0192-5097",
                    "invoice_date": "2020-12-18",
                    "description": "Microsoft monthly fees | Finance",
                    "amount": 900.99
                },
                {
                    "invoice_number": "0192-5098",
                    "invoice_date": "2020-12-18",
                    "description": "Microsoft monthly fees | Operations",
                    "amount": 900.99
                },
                {
                    "invoice_number": "0192-5099",
                    "invoice_date": "2020-12-19",
                    "description": "Microsoft monthly fees | Sales",
                    "amount": 900.99
                }
            ]
        }
    },
    {
        "payment": {
            "vendor": {
                "name": "Fraud Busters",
                "address": "123 Fictitious Ln",
                "address2": "",
                "city": "Richmond",
                "state": "VA",
                "zip": "23235",
                "industry": "Security Systems Services"
            },
            "remittance": [
                {
                    "invoice_number": "513",
                    "invoice_date": "2020-12-16",
                    "description": "Fraud analytics software fees",
                    "amount": 100.01
                },
                {
                    "invoice_number": "0192-5097",
                    "invoice_date": "2020-12-18",
                    "description": "Thread detection monitoring fees",
                    "amount": 100.03
                },
                {
                    "invoice_number": "515",
                    "invoice_date": "2020-12-16",
                    "description": "DAST Software",
                    "amount": 100.04
                }
            ]
        }
    },
    {
        "payment": {
            "vendor": {
                "name": "Github",
                "address": "88 Colin P Kelly Junior Street",
                "address2": "",
                "city": "San Franciscoo",
                "state": "CA",
                "zip": "94107",
                "industry": "Software Services"
            },
            "remittance": [
                {
                    "invoice_number": "inv#-20201214-a",
                    "invoice_date": "2020-12-14",
                    "description": "Version Control for AppDev",
                    "amount": 340
                }
            ]
        }
    }
]

//function for total of each payment
data.forEach((item) => {
  var result = 0;
  if (item.payment.remittance.amount == undefined)
    result = item.payment.remittance.reduce(function (rem, obj) {
      return rem + obj.amount;
    }, 0);
  else result = item.payment.remittance.amount;
  item.payment.total_amount = result;
  console.log(result);
});