const config = {
  cert: process.env.CERT,
  dbUrl: process.env.DBURL || "mongodb://localhost/test-db",
  env: process.env.NODE_ENV || "development",
  intermediateCert: process.env.INTERMEDIATECERT,
  key: process.env.KEY,
  logDir: process.env.LOGDIR || "logs",
  port: process.env.PORT || 3000,
  viewEngine: process.env.VIEW_ENGINE || "html",
  weatherApi: process.env.WEATHER_API || "api.openweathermap.org/data/2.5",
  weatherApiKey: process.env.WEATHER_API_KEY
};

module.exports = config;
