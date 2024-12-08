// Do not modify the main function
//Convert the functions present inside main to ES6 standard(i.e. to arrow function)  
function main() {
    let yearData = {};
    function createPerYearData(year, total) {
      yearData[year] = total;
    }
  
    function printReport() {
      console.log("Print Report");
    }
  
    function calculateTotalTillDate(perYearBalance) {
      let total = 0;
      for (let i = 0; i < perYearBalance.length; i++) {
        total += perYearBalance[i];
      }
      return total;
    }
  
    function adjustTotalOfYear(year, adjustmentFactor) {
      yearData[year] *= adjustmentFactor;
    }
    //Do not modify the code after this
    return {
      createPerYearData,
      printReport,
      calculateTotalTillDate,
      adjustTotalOfYear
    };
  }
 function main()  {
    letyearData = {};
    const createPerYearData = (year, total) => {
        yearData[year]=total;
    };

    constprintReport=()=>{
        console.log("Print Report");
    };

    const claculateTotalTilDate=(perYearBalance)=>{
        letTotal=0;
        for(let i=0;i <perYearBalance.length;i++) {
            total += perYearBalance[i];
    }
    return total;
 };

 const adjustTotalOfYear = (year, adjustmentFactor)=> {
    yearDate[year]*=adjustmentFactor;
 };

 return{
    createPerYearDate,
    printReport,
    calculatetotalTilDate,
    adjustTotalOfYear
  };
 }
 //getting error informationError: Cannot find module '/Users/ranbirsingh/Desktop/Java Script/refractroing
   // at Module._resolveFilename (node:internal/modules/cjs/loader:1143:15)
    //at Module._load (node:internal/modules/cjs/loader:984:27)
    //at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    //at node:internal/main/run_main_module:28:49 {
  //code: 'MODULE_NOT_FOUND',
  //requireStack: []