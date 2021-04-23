# Kataw parser test case

## Input

`````js
let y = typeof async x => await x
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
                "flags": 768,
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
                            "kind": 126,
                            "operandToken": {
                                "kind": 138477613,
                                "flags": 768,
                                "start": 7,
                                "end": 14
                            },
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 22,
                                    "end": 25
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
                                            "start": 20,
                                            "end": 22
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 22
                                    }
                                ],
                                "asyncToken": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 14,
                                    "end": 20
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 208,
                                    "awaitToken": {
                                        "kind": 82032,
                                        "flags": 768,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 31,
                                        "end": 33
                                    },
                                    "flags": 256,
                                    "start": 25,
                                    "end": 33
                                },
                                "flags": 2304,
                                "start": 14,
                                "end": 33
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 33
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 33
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "let y = typeof async x => await x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

