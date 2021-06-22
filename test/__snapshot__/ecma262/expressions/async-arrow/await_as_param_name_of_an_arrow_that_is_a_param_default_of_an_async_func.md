# Kataw parser test case

## Input

`````js
async(a = (await) => {}) => {};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 281,
                    "ellipsisToken": null,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 6,
                        "end": 7
                    },
                    "optionalToken": null,
                    "type": null,
                    "right": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "start": 11,
                                "end": 16
                            }
                        ],
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 17,
                            "end": 20
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 22,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 9,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 23
                }
            ],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 24,
                "end": 27
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 29,
                    "end": 29
                },
                "flags": 32,
                "start": 27,
                "end": 30
            },
            "flags": 290,
            "start": 0,
            "end": 30
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 30,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "async(a = (await) => {}) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

async (a = (await) =>  {}) =>  {}

```

### Diagnostics

```javascript
✔ No errors
```

