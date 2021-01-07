define({ "api": [
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Edit",
    "name": "UserEdit",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": ":id",
            "description": "<p>id do usuário a ser editado</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"message\": \"item editado!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "name": "UserLogin",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"user\": {\n    \"id\": 2,\n    \"name\": \"Jane Doe\",\n    \"email\": \"jane@email.com\",\n    \"createdAt\": \"2021-01-06T04:02:29.091Z\",\n    \"updatedAt\": \"2021-01-06T04:02:29.091Z\"\n  },\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA5OTEzMjg5fQ.gPO3-dzzn3Ary24uPgCEAgJzK3s6tR_VHI_2irtlyvs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register",
    "name": "UserRegister",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Obrigatório</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Obrigatório</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"user\": {\n    \"id\": 2,\n    \"name\": \"Jane Doe\",\n    \"email\": \"jane@email.com\",\n    \"createdAt\": \"2021-01-06T04:02:29.091Z\",\n    \"updatedAt\": \"2021-01-06T04:02:29.091Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Remove",
    "name": "UserRemove",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": ":id",
            "description": "<p>id do usuário a ser removido</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"message\": \"item removido!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Show",
    "name": "UserShow",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": ":id",
            "description": "<p>id do usuário a ser buscado</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 2,\n  \"name\": \"Jane Doe\",\n  \"email\": \"jane@email.com\",\n  \"createdAt\": \"2021-01-06T04:02:29.091Z\",\n  \"updatedAt\": \"2021-01-06T06:18:06.368Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs.js",
    "groupTitle": "Users"
  }
] });
