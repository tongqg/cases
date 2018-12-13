import uuidv1 from "uuid/v1";

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
          host: ["www", "baidu", "com"],
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
          caseId: "case1",
          id: "case1_run1",
          trigger: "Dashboard",
          timings: {
            started: 1542100812366,
            completed: 1542100812366
          },
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
        },
        {
          caseId: "case1",
          id: "case1_run2",
          trigger: "API",
          timings: {
            started: 1532101812366,
            completed: 1532101812366
          },
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
            code: 404,
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
      name: "case2",
      id: "case2",
      request: {
        url: {
          protocol: "https",
          path: ["tongqg", "cases", "1.0.1"],
          host: ["www", "baidu", "com"],
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
          caseId: "case2",
          id: "case2_run1",
          trigger: "Dashboard",
          status: "running",
          timings: {
            started: 1532101812366
          },
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
          response: {}
        }
      ]
    }
  ]
};

export function formatUrl(request) {
  return (
    request.url.protocol +
    "://" +
    request.url.host.join(".") +
    "/" +
    request.url.path.join("/")
  );
}

export function formatResponseBody(response) {
  return String.fromCharCode.apply(this, response.stream.data);
}

export function newExecution(oneCase) {
  let ret = {
    id: uuidv1(),
    caseId: oneCase.id,
    request: { ...oneCase.request },
    status: "running",
    trigger: "Dashboard",
    timings: {
      started: Date.now()
    }
  };
  return ret;
}

export function setExecution(execution, response) {
  execution.status = "complete";
  execution.timings.completed = Date.now();
  execution.response = response;
}
// function
export default collection;
