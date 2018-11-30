const collection = {
  info: {
    name: "test case"
  },
  item: [
    {
      name: "case1",
      id: "case1",
      request: {
        url: {
          protocol: "https",
          path: ["tongqg", "cases", "1.0.1"],
          host: ["virtserver", "swaggerhub", "com"],
          query: [],
          variable: []
        },
        header: [
          {
            key: "Content-Type",
            value: "application/json"
          }
        ],
        method: "GET",
        body: {
          mode: "raw",
          raw: '{"MPT-PROD": {"PHX":-1000, "LVS": -1000, "SLC":-1000}}'
        }
      },
      executions: [
        {
          id: "case1",
          execution_id: "case1_run1",
          request: {
            url: {
              protocol: "https",
              path: ["tongqg", "cases", "1.0.1"],
              host: ["virtserver", "swaggerhub", "com"],
              query: [],
              variable: []
            },
            header: [
              {
                key: "Content-Type",
                value: "application/json"
              }
            ],
            method: "GET",
            body: {
              mode: "raw",
              raw: '{"MPT-PROD": {"PHX":-1000, "LVS": -1000, "SLC":-1000}}'
            }
          },
          response: {
            code: 200,
            header: [
              { key: "Content-Type", value: "application/json" },
              { key: "date", value: "Tue, 27 Nov 2018 09:04:17 GMT " }
            ],
            stream: { type: "buffer", data: [96, 97, 98] },
            responseTime: 2000,
            responseSize: 3129
          }
        }
      ]
    },
    {
      name: "case1",
      id: "case1",
      request: {
        url: {
          protocol: "https",
          path: ["tongqg", "cases", "1.0.1"],
          host: ["virtserver", "swaggerhub", "com"],
          query: [],
          variable: []
        },
        header: [
          {
            key: "Content-Type",
            value: "application/json"
          }
        ],
        method: "GET",
        body: {
          mode: "raw",
          raw: '{"MPT-PROD": {"PHX":-1000, "LVS": -1000, "SLC":-1000}}'
        }
      },
      executions: []
    }
  ]
};

export default collection;
