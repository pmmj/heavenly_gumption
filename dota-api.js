  const Dota2Api = require('dota2-api');

  const da = Dota2Api.create('B62159F79B69B2DCB5DAE14F5AAD2988', 570);

 const options = {match_id: 3413850295};
  da.getMatchDetails(options).then((result) => {
      console.log(result);
  }, (errorResponseStatusText) => {
      console.log(errorResponseStatusText);
  });