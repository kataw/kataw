# Kataw parser test case

## Input

`````js
function *f(){  ({*g(x=yield){}})  }
`````

## Output

### CST

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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
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
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 257,
                                                "asyncKeyword": null,
                                                "generatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 18,
                                                    "end": 19
                                                },
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "g",
                                                        "rawText": "g",
                                                        "flags": 96,
                                                        "start": 19,
                                                        "end": 20
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameters": [
                                                            {
                                                                "kind": 281,
                                                                "ellipsisToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 21,
                                                                    "end": 22
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "right": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 64,
                                                                        "start": 23,
                                                                        "end": 28
                                                                    },
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "flags": 32,
                                                                    "start": 23,
                                                                    "end": 28
                                                                },
                                                                "flags": 34,
                                                                "start": 21,
                                                                "end": 28
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 162,
                                                        "start": 21,
                                                        "end": 29
                                                    },
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 30,
                                                            "end": 30
                                                        },
                                                        "flags": 32,
                                                        "start": 29,
                                                        "end": 31
                                                    },
                                                    "flags": 160,
                                                    "start": 20,
                                                    "end": 31
                                                },
                                                "flags": 32,
                                                "start": 18,
                                                "end": 31
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 18,
                                        "end": 31
                                    },
                                    "flags": 48,
                                    "start": 17,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 33
                },
                "flags": 32,
                "start": 13,
                "end": 36
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "function *f(){  ({*g(x=yield){}})  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 23, end: 28

```

