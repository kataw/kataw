# Kataw parser test case

## Input

`````js
async function g(){    function f(foo = [h, {m: t(+await bar)}]){}    }
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 19,
                                "end": 31
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 31,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 34,
                                            "end": 37
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "h",
                                                        "rawText": "h",
                                                        "flags": 768,
                                                        "start": 41,
                                                        "end": 42
                                                    },
                                                    {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "left": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "t",
                                                                            "rawText": "t",
                                                                            "flags": 768,
                                                                            "start": 47,
                                                                            "end": 49
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 126,
                                                                                    "operandToken": {
                                                                                        "kind": 34098,
                                                                                        "flags": 768,
                                                                                        "start": 50,
                                                                                        "end": 51
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "await",
                                                                                        "rawText": "await",
                                                                                        "flags": 768,
                                                                                        "start": 51,
                                                                                        "end": 56
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 50,
                                                                                    "end": 56
                                                                                },
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "bar",
                                                                                    "rawText": "bar",
                                                                                    "flags": 768,
                                                                                    "start": 56,
                                                                                    "end": 60
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 256,
                                                                            "start": 50,
                                                                            "end": 60
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 45,
                                                                        "end": 61
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "m",
                                                                        "rawText": "m",
                                                                        "flags": 768,
                                                                        "start": 45,
                                                                        "end": 46
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 45,
                                                                    "end": 61
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "start": 45,
                                                            "end": 61
                                                        },
                                                        "flags": 256,
                                                        "start": 43,
                                                        "end": 62
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 41,
                                                "end": 62
                                            },
                                            "flags": 256,
                                            "start": 39,
                                            "end": 63
                                        },
                                        "flags": 258,
                                        "start": 34,
                                        "end": 63
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 258,
                                "start": 33,
                                "end": 64
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 65,
                                    "end": 65
                                },
                                "flags": 256,
                                "start": 64,
                                "end": 66
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 19,
                            "end": 66
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 66
                },
                "flags": 256,
                "start": 18,
                "end": 71
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "text": "async function g(){    function f(foo = [h, {m: t(+await bar)}]){}    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ ',' expected - start: 56, end: 60

```

