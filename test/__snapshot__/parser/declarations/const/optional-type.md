# Kataw parser test case

## Input

`````js
const f = (...x?) => {}
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 17,
                                "end": 20
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 11,
                                        "end": 14
                                    },
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 15,
                                        "end": 16
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 34,
                                    "start": 11,
                                    "end": 16
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
                        "flags": 16,
                        "start": 5,
                        "end": 23
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 23
            },
            "flags": 33554448,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "const f = (...x?) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
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

