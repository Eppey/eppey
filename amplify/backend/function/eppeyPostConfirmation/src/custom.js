var AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: 'User' },
        email: { S: event.request.userAttributes.email },
        nickname: { S: event.request.userAttributes.nickname },
        school: { S: event.request.userAttributes['custom:school'] },
        major: { S: event.request.userAttributes['custom:major'] },
        points: { N: '0' },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName: process.env.USERTABLE,
    };

    try {
      return await ddb.putItem(params).promise();
    } catch (err) {
      console.log('Error', err);
    }
  } else {
    console.log('Error: Nothing was written to DynamoDB');
  }
};
