# Kataw parser test case

## Input

`````js
async (a = (...await) => {});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "original": "async",
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "original": "a",
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 8,
                            "end": 10
                        },
                        "right": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 21,
                                "end": 24
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "binding": {
                                        "kind": 134299649,
                                        "original": "await",
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 20
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 34,
                                    "start": 12,
                                    "end": 20
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 26,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 27
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 27
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 32,
            "start": 0,
            "end": 28
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 28,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "async (a = (...await) => {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

