const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const sumArray = (sales) => {
  let sum = 0;
  for (let i = 0; i < sales.length; i++) {
    sum += sales[i];
  }
  return sum;
};

const calculateSalesTax = function(salesData, taxRates) {

  let result = {};

  for (let company of salesData) {

    let obj = result[company.name] || { totalSales: 0, totalTaxes: 0 };
    const companytotalSales = sumArray(company.sales);

    obj.totalSales += companytotalSales;

    obj.totalTaxes += companytotalSales * taxRates[company.province];

    result[company.name] = obj;
  }

  return result;

};

console.log(calculateSalesTax(companySalesData, salesTaxRates));

// Expected Results:
// {
//   Telus: {
//     totalSales: 1300
//     totalTaxes: 144
//   },
//   Bombardier: {
//     totalSales: 800,
//     totalTaxes: 40
//   }
// }