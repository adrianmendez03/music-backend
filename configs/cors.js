var whitelist = ['http://localhost:3000/', 'https://clever-pasteur-2b13a4.netlify.app/'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.length === 0) {
      callback(null, true);
    } else {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  },
};

module.exports = corsOptions