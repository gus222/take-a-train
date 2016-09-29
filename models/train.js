var Backbone = require('backbone');
var Teams = require('../models/team').Teams;
var User = require('../models/user').User;

var Train = Backbone.Model.extend({
  defaults: {
    Name: "NA",
    ProgramManager: undefined,
    teams: undefined,
  },
  initialize: function() {
    this.set('teams', new Teams());
    this.set('ProgramManager', new User());
  },
});

var Trains = Backbone.Collection.extend({
  model: Train,
});

exports.Train = Train;
exports.Trains = Trains;
