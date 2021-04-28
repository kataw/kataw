# Kataw parser test case

## Input

`````js
function *g(){ (x = [yield y]) }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 8,
                "start": 512,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 17,
                                        "start": 512,
                                        "end": 19
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 21,
                                                        "start": 0,
                                                        "end": 26
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 26,
                                                        "end": 28
                                                    },
                                                    "flags": 256,
                                                    "start": 21,
                                                    "end": 28
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 21,
                                            "end": 28
                                        },
                                        "flags": 256,
                                        "start": 19,
                                        "end": 29
                                    },
                                    "flags": 256,
                                    "start": 14,
                                    "end": 29
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 30
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 30
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 14,
                    "end": 30
                },
                "flags": 256,
                "start": 13,
                "end": 32
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "function *g(){ (x = [yield y]) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
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

