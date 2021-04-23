# Kataw parser test case

## Input

`````js
(function *f(){  ({*g(x=yield){}})  })
`````

## Output

### Hybrid CST

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
                        "flags": 768,
                        "start": 1,
                        "end": 9
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 11,
                        "end": 12
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 12,
                        "end": 14
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
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "g",
                                                            "rawText": "g",
                                                            "flags": 768,
                                                            "start": 20,
                                                            "end": 21
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [
                                                                {
                                                                    "kind": 215,
                                                                    "ellipsisToken": null,
                                                                    "binding": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 768,
                                                                        "start": 22,
                                                                        "end": 23
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 229,
                                                                        "yieldKeyword": {
                                                                            "kind": 8454253,
                                                                            "flags": 768,
                                                                            "start": 24,
                                                                            "end": 29
                                                                        },
                                                                        "delegate": false,
                                                                        "asteriskToken": null,
                                                                        "expression": null,
                                                                        "flags": 256,
                                                                        "start": 24,
                                                                        "end": 29
                                                                    },
                                                                    "flags": 258,
                                                                    "start": 22,
                                                                    "end": 29
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 1282,
                                                            "start": 22,
                                                            "end": 30
                                                        },
                                                        "type": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "multiline": false,
                                                                "flags": 256,
                                                                "start": 31,
                                                                "end": 31
                                                            },
                                                            "flags": 256,
                                                            "start": 30,
                                                            "end": 32
                                                        },
                                                        "flags": 1280,
                                                        "start": 21,
                                                        "end": 32
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 19,
                                                "end": 32
                                            },
                                            "flags": 256,
                                            "start": 18,
                                            "end": 33
                                        },
                                        "flags": 256,
                                        "start": 15,
                                        "end": 34
                                    },
                                    "flags": 128,
                                    "start": 15,
                                    "end": 34
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 15,
                            "end": 34
                        },
                        "flags": 256,
                        "start": 14,
                        "end": 37
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 1,
                    "end": 37
                },
                "flags": 256,
                "start": 0,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "(function *f(){  ({*g(x=yield){}})  })",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

