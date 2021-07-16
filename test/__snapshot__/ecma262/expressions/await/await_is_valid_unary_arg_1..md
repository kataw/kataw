# Kataw parser test case

## Input

`````js
async function g(){    function f(foo = [h, {m: t(+await bar)}]){}    }
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
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
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 31
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 33
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
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 37
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "h",
                                                        "rawText": "h",
                                                        "flags": 96,
                                                        "transformFlags": 0,
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
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "m",
                                                                        "rawText": "m",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 45,
                                                                        "end": 46
                                                                    },
                                                                    "right": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "t",
                                                                            "rawText": "t",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 47,
                                                                            "end": 49
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 126,
                                                                                    "operandToken": {
                                                                                        "kind": 99634,
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 50,
                                                                                        "end": 51
                                                                                    },
                                                                                    "operand": {
                                                                                        "kind": 134299649,
                                                                                        "text": "await",
                                                                                        "rawText": "await",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 51,
                                                                                        "end": 56
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 16384,
                                                                                    "start": 50,
                                                                                    "end": 56
                                                                                },
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "bar",
                                                                                    "rawText": "bar",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 56,
                                                                                    "end": 60
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 50,
                                                                            "end": 60
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 1,
                                                                        "start": 45,
                                                                        "end": 61
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 45,
                                                                    "end": 61
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 45,
                                                            "end": 61
                                                        },
                                                        "flags": 48,
                                                        "transformFlags": 8,
                                                        "start": 43,
                                                        "end": 62
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 62
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 39,
                                            "end": 63
                                        },
                                        "flags": 34,
                                        "transformFlags": 4096,
                                        "start": 34,
                                        "end": 63
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 63
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 65
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 66
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 66
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 66
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 71
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "async function g(){    function f(foo = [h, {m: t(+await bar)}]){}    }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 57, end: 60

```

