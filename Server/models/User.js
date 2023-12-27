const mongoose = require('mongoose');
const model = mongoose.model;

const ashokleyS = new mongoose.Schema({
  Date: {
    type: Date,
  },
  Open: {
    type: String,
  },
  High: {
    type: String,
  },
  Low: {
    type: String,
  },
  Close: {
    type: String,
  },
  Adj_Close: {
    type: String,
  },
  Volume: {
    type: String,
  },
});
const bseS = new mongoose.Schema({
  Date: {
    type: Date,
  },
  Open: {
    type: String,
  },
  High: {
    type: String,
  },
  Low: {
    type: String,
  },
  Close: {
    type: String,
  },
  Adj_Close: {
    type: String,
  },
  Volume: {
    type: String,
  },
});
const ciplaS = new mongoose.Schema({
  Date: {
    type: Date,
  },
  Open: {
    type: String,
  },
  High: {
    type: String,
  },
  Low: {
    type: String,
  },
  Close: {
    type: String,
  },
  Adj_Close: {
    type: String,
  },
  Volume: {
    type: String,
  },
});
const eichermotS = new mongoose.Schema({
  Date: {
    type: Date,
  },
  Open: {
    type: String,
  },
  High: {
    type: String,
  },
  Low: {
    type: String,
  },
  Close: {
    type: String,
  },
  Adj_Close: {
    type: String,
  },
  Volume: {
    type: String,
  },
});
const nseS = new mongoose.Schema({
  Date: {
    type: Date,
  },
  Open: {
    type: String,
  },
  High: {
    type: String,
  },
  Low: {
    type: String,
  },
  Close: {
    type: String,
  },
  Adj_Close: {
    type: String,
  },
  Volume: {
    type: String,
  },
});
const relianceS = new mongoose.Schema({
  Date: {
    type: Date,
  },
  Open: {
    type: String,
  },
  High: {
    type: String,
  },
  Low: {
    type: String,
  },
  Close: {
    type: String,
  },
  Adj_Close: {
    type: String,
  },
  Volume: {
    type: String,
  },
});
const tatasteelS = new mongoose.Schema({
  Date: {
    type: Date,
  },
  Open: {
    type: String,
  },
  High: {
    type: String,
  },
  Low: {
    type: String,
  },
  Close: {
    type: String,
  },
  Adj_Close: {
    type: String,
  },
  Volume: {
    type: String,
  },
});
const model1 = mongoose.model('ASHOKLEY', ashokleyS);
const model2 = mongoose.model('BSE', bseS);
const model3 = mongoose.model('CIPLA', ciplaS);
const model4 = mongoose.model('EICHERMOT', eichermotS);
const model5 = mongoose.model('NSE', nseS);
const model6 = mongoose.model('RELIANCE', relianceS);
const model7 = mongoose.model('TATASTEEL', tatasteelS);
module.exports = {
  model1,
  model2,
  model3,
  model4,
  model5,
  model6,
  model7,
};
