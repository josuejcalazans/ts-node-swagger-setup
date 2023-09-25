export const swaggerDocument = {
  openapi: "3.0.2",
  info: {
    title: "Node Swagger Example",
    description:
      "This is just an example of how to use swagger in a node/express application",
    version: "1.0.0",
    contact: {
      name: "Josue Jhonatas",
      email: "josue.calazans07@gmail.com",
      url: "https://github.com/josuejcalazans",
    },
  },
  paths: {
    "/": {
      get: {
        tags: ["Hello World!"],
        summary: "Greeting",
        description: "Returns the greeting 'hello world!'",
        responses: {
          "200": {
            description: "Successful Greeting",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    greeting: {
                      type: "string",
                    },
                  },
                  example: {
                    greeting: "hello world!",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}
