"use strict";
const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient();
// Function to Create an Item to DB
module.exports.addItem = async (event) => {
  try {
    let params = {
      TableName: "UserTable",
      Item: {
        id: Math.floor(Math.random() * 100),
        name: "Edian" + Math.floor(Math.random() * 100),
        info: {
          plot: "Nothing happens at all",
          rating: 0,
        },
      },
    };

    let result = await docClient.put(params).promise();
    if (result) {
      console.log(">>>>>>>>>", result);
    }

    console.log("hello world");
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v1.0! Your function executed successfully!",
        data: result,
      }),
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Function to getAllItems from DB
module.exports.getAllItem = async () => {
  let params = {
    TableName: "UserTable",
  };

  try {
    let result = await docClient.scan(params).promise();

    console.log(result);

    return {
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.log(error);
  }
};
