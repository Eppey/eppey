/* eslint-disable-line */ const aws = require('aws-sdk');

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
});

exports.handler = async (event) => {
  const addUserParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  // Add the user to the group.
  await cognitoidentityserviceprovider
    .adminAddUserToGroup(addUserParams)
    .promise();

  return event;
};
