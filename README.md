# Rocket-Launch-Manifest

Alexa skill for obtaining details about upcoming rocket launches. Now available for [Amazon Echo](http://alexa.amazon.com/spa/index.html#skills/beta/amzn1.ask.skill.e387cc51-e511-4e1a-8281-bc9b0eaadd30/?ref=skill_dsk_skb_ys_3)


### Try it on the Amazon Echo

<img src="http://at1as.github.io/github_repo_assets/alexa-rocket-manifest-1.png" width="600px">

### Usage:

A few examples of usage

**Alexa ask Rocket Manifest for the next two scheduled launches**

Here's your forcast for the next 2 launches. The next launch is SCATSat-1 which is confirmed for September 26, 2016 03:42:00 U.T.C. The following launch is Gonets-M24, Gonets-M25, Gonets-M26 which is tentatively set for September 30, 2016 00:00:00 U.T.C.


**Alexa ask Rocket Manifest what's up next?**

The next launch is SCATSat-1 which is confirmed for September 26, 2016 03:42:00 U.T.C.

<br>
*To see more phrases Rocket Manifest will accept see SampleUtterances in the /src directory. Note that if you ask for details of more than 10 launches only 10 launches will be returned*


## Details:

Uses [Launch Library API v1.2](https://www.launchlibrary.net/1.2/docs/api.html) to retrieve launch data



## Maintenance
*All links below will only work for the publisher of the app (me)*

### To Update Skill:

Zip contents of /src directory along with the node_modules directory itself (node_modules/, index.js file and AlexaSkill.js file all at at the same folder level) into one zip file (Archive.zip) and upload to [Amazon Lambda](https://console.aws.amazon.com/lambda/home?region=us-east-1).


### To Monitor:

Logs are available in the [AWS Console](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1)


### To Test:

Can test from the [Amazon Skill Configuration Page](https://developer.amazon.com/edw/home.html#/skill/amzn1.ask.skill.e387cc51-e511-4e1a-8281-bc9b0eaadd30/en_US/testing).
