const amplifyConfig = {
  "aws_user_pools_id": "us-east-1_DLrmHacUC",
  "aws_user_pools_web_client_id": "5tet6h1ifsj8gkdtt480k0lm1v",
  "aws_cognito_region": "us-east-1",
  "aws_appsync_graphqlEndpoint": "https://sx2tqqiurnhkldkhximwftd4ea.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_apiKey": "da2-ikdjfh2upbcbvcx7uhlfj7fqta",
  "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
  "aws_appsync_additionalAuthenticationTypes": "API_KEY,AWS_IAM",
  "modelIntrospection": {
    "version": 1,
    "models": {
      "TacoRecipe": {
        "name": "TacoRecipe",
        "fields": {
          "id": {
            "name": "id",
            "isArray": false,
            "type": "ID",
            "isRequired": true,
            "attributes": []
          },
          "title": {
            "name": "title",
            "isArray": false,
            "type": "String",
            "isRequired": true,
            "attributes": []
          },
          "description": {
            "name": "description",
            "isArray": false,
            "type": "String",
            "isRequired": false,
            "attributes": []
          },
          "createdAt": {
            "name": "createdAt",
            "isArray": false,
            "type": "AWSDateTime",
            "isRequired": false,
            "attributes": [],
            "isReadOnly": true
          },
          "updatedAt": {
            "name": "updatedAt",
            "isArray": false,
            "type": "AWSDateTime",
            "isRequired": false,
            "attributes": [],
            "isReadOnly": true
          }
        },
        "syncable": true,
        "pluralName": "TacoRecipes",
        "attributes": [
          {
            "type": "model",
            "properties": {}
          },
          {
            "type": "auth",
            "properties": {
              "rules": [
                {
                  "provider": "userPools",
                  "ownerField": "owner",
                  "allow": "owner",
                  "identityClaim": "cognito:username",
                  "operations": [
                    "create",
                    "update",
                    "delete",
                    "read"
                  ]
                },
                {
                  "allow": "public",
                  "operations": [
                    "read"
                  ]
                }
              ]
            }
          }
        ],
        "primaryKeyInfo": {
          "isCustomPrimaryKey": false,
          "primaryKeyFieldName": "id",
          "sortKeyFieldNames": []
        }
      }
    },
    "enums": {},
    "nonModels": {}
  }
}
export default amplifyConfig;
