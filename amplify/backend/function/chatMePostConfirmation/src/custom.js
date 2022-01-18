const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();
const TableName = provess.env.USERTABLE;

exports.handler = async (event, context, callback) => {
  // insert code to be executed by your lambda trigger
  // save user to DynamoDb
  if(!event?.request?.userAttributes?.sub){
    console.log("No sub provided");
    return;
  }
  const now = new Date();
  const timestamp = now.timestamp;

  const userId = {
    __typename = {S: 'User'},
    _lastChangeAt:{N: timestamp.toString()},
    _version:{N: "1"},
    createdAt:{S: now.toISOString()},
    updatedAt:{S: now.toISOString()},
    id:{S: event.request.userAttributes.sub},
    name:{S: event.request.userAttributes.email}
  }
  const params = {
    Item: userItem,
    TableName: TableName
  }

  try{
    await ddb.putItem(params).promise();
    console.log("success");
  }catch (e){
    console.log(e);
  }
};
