# Kataw parser test case

## Input

`````js
function *g(){ (x = {[yield]: 1}) => z }
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
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 33,
                                    "start": 0,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
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
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 768,
                                                            "start": 29,
                                                            "end": 31
                                                        },
                                                        "right": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 22,
                                                                    "start": 0,
                                                                    "end": 27
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 256,
                                                                "start": 22,
                                                                "end": 27
                                                            },
                                                            "flags": 256,
                                                            "start": 21,
                                                            "end": 28
                                                        },
                                                        "flags": 256,
                                                        "start": 21,
                                                        "end": 31
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 21,
                                                "end": 31
                                            },
                                            "flags": 256,
                                            "start": 19,
                                            "end": 32
                                        },
                                        "flags": 256,
                                        "start": 14,
                                        "end": 32
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 768,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 38
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 38
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 14,
                    "end": 38
                },
                "flags": 256,
                "start": 13,
                "end": 40
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "function *g(){ (x = {[yield]: 1}) => z }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
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

