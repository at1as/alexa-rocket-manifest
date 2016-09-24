'use strict'

var Alexa      = require('alexa-sdk');
var AlexaSkill = require('./AlexaSkill');
var request    = require('then-request');


let APP_ID     = 'amzn1.ask.skill.e387cc51-e511-4e1a-8281-bc9b0eaadd30';
let SKILL_NAME = 'Launch Manifest';
let BASE_URL   = 'https://launchlibrary.net/1.2/';
let USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:48.0) Gecko/20100101 Firefox/48.0';



var LaunchManifest = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
LaunchManifest.prototype = Object.create(AlexaSkill.prototype);
LaunchManifest.prototype.constructor = LaunchManifest;


var request_headers = {
  'User-Agent': USER_AGENT,
  'Accept':     'application/json'
}



LaunchManifest.prototype.intentHandlers = {

  'GetNextLaunch': function (intent, session, response) {
    makeRequest('launch?next=1', function cb(err, data) {
        console.log(data);

        var speech_output;
        var launch_info = data['launches'][0];

        var launch_name = launch_info.name ? launch_info.name.split('|')[1].replace('&', 'and') : null;
        var confirmed = (launch_info.tbddate !== 1 && launch_info.tbdtime !== 1) ? true : false;
        var launch_date = (launch_info.net !== '') ? launch_info.net : null;

        if (launch_name) {
          speech_output = 'The next launch is ' + launch_name;
          if (launch_date){
            if (confirmed){
              speech_output += ' which is confirmed for ' + launch_date;
            } else {
              speech_output += ' which is tentatively set for ' + launch_date;
            }
          }
        } else {
          speech_output = 'There are no launches currently scheduled';
        }

        response.tellWithCard(speech_output);
    });
  },

  'AMAZON.HelpIntent': function (intent, session, response) {
     response.ask('Ask when the next rocket launch is', 'Ask when the next rocket launch is');
   },
   'AMAZON.CancelIntent': function (intent, session, response) {
     response.tell('Goodbye');
   },
   'AMAZON.StopIntent': function (intent, session, response) {
     response.tell('Goodbye');
   }
}


function makeRequest(url_path, cb) {
  request('GET', BASE_URL + url_path, {headers: request_headers }).done(function(res) {
    try {
      cb(null, JSON.parse(res.getBody('utf-8')));
    } catch(err) {
      cb('Error retrieving data', null);
    }
  });
}


// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the LaunchManifest skill.
    var launchManifest = new LaunchManifest();
    launchManifest.execute(event, context);
};
