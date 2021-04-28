# Kataw parser test case

## Input

`````js
let y = async x => { await x; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 640,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 15,
                                "start": 0,
                                "end": 18
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 7,
                                    "end": 15
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 7,
                                "start": 512,
                                "end": 13
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 208,
                                                "awaitToken": {
                                                    "kind": 82032,
                                                    "flags": 20,
                                                    "start": 0,
                                                    "end": 26
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 26,
                                                    "end": 28
                                                },
                                                "flags": 256,
                                                "start": 20,
                                                "end": 28
                                            },
                                            "flags": 128,
                                            "start": 20,
                                            "end": 29
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 20,
                                    "end": 29
                                },
                                "flags": 256,
                                "start": 18,
                                "end": 31
                            },
                            "flags": 2304,
                            "start": 7,
                            "end": 31
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "let y = async x => { await x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
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

