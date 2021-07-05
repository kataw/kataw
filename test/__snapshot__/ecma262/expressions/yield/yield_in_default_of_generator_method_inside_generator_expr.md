# Kataw parser test case

## Input

`````js
(function *f(){  ({*g(x=yield){}})  })
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
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 1,
                        "end": 9
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 9,
                        "end": 11
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 11,
                        "end": 12
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 13,
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
                                                        "kind": 351,
                                                        "asyncKeyword": null,
                                                        "asteriskToken": {
                                                            "kind": 67143222,
                                                            "flags": 64,
                                                            "start": 19,
                                                            "end": 20
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
                                                                "start": 20,
                                                                "end": 21
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
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
                                                                            "start": 22,
                                                                            "end": 23
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "right": {
                                                                            "kind": 229,
                                                                            "yieldKeyword": {
                                                                                "kind": 8454253,
                                                                                "flags": 64,
                                                                                "start": 24,
                                                                                "end": 29
                                                                            },
                                                                            "delegate": false,
                                                                            "asteriskToken": null,
                                                                            "expression": null,
                                                                            "flags": 32,
                                                                            "start": 24,
                                                                            "end": 29
                                                                        },
                                                                        "flags": 34,
                                                                        "start": 22,
                                                                        "end": 29
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 162,
                                                                "start": 22,
                                                                "end": 30
                                                            },
                                                            "returnType": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "start": 31,
                                                                    "end": 31
                                                                },
                                                                "flags": 32,
                                                                "start": 30,
                                                                "end": 32
                                                            },
                                                            "flags": 160,
                                                            "start": 21,
                                                            "end": 32
                                                        },
                                                        "flags": 32,
                                                        "start": 19,
                                                        "end": 32
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 19,
                                                "end": 32
                                            },
                                            "flags": 48,
                                            "start": 18,
                                            "end": 33
                                        },
                                        "flags": 15,
                                        "start": 34,
                                        "end": 34
                                    },
                                    "flags": 16,
                                    "start": 15,
                                    "end": 34
                                }
                            ],
                            "flags": 32,
                            "start": 15,
                            "end": 34
                        },
                        "flags": 32,
                        "start": 14,
                        "end": 37
                    },
                    "returnType": null,
                    "flags": 288,
                    "start": 1,
                    "end": 37
                },
                "flags": 0,
                "start": 32,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "(function *f(){  ({*g(x=yield){}})  })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 24, end: 29

```

