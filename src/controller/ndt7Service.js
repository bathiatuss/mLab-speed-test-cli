const ndt7 = require("@m-lab/ndt7");
// Network Diagnostic Tool Protocol v7 2020-02-18

const Config = require("../utility/config");

function runTest(callbacks) {
  const config = Config; //use the imported config class
  const userCallbacks = config.getCallbacks(callbacks);

  return ndt7
    .test(config.dataPolicy, userCallbacks)
    .then((result) => {
      if (result === 0) {
        console.log("Test compeleted successfully");
      } else {
        console.log("Test failed with error code:", result);
      }
    })
    .catch((error) => console.error("Test encountered an error:", error));
}

module.exports = { runTest };
