# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
a ? (({b}) => {}) : c
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 8
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "flags": 48,
                                    "start": 6,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2,
                            "start": 6,
                            "end": 10
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 10,
                            "end": 13
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 34,
                        "start": 5,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 17
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 17,
                    "end": 19
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "flags": 96,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": true,
    "source": "a ? (({b}) => {}) : c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

  a ? (({
      b
    }) => {}) : c;

```

### Diagnostics

```javascript
✔ No errors
```

