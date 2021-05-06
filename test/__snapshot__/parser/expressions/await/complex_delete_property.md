# Kataw parser test case

## Input

`````js
async function a(){     async ([y] = delete ((foo[await x]))) => {};     }
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
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 19,
                                "end": 29
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 32,
                                                        "end": 33
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 32,
                                                "end": 33
                                            },
                                            "flags": 32,
                                            "start": 31,
                                            "end": 34
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 34,
                                            "end": 36
                                        },
                                        "right": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 4259886,
                                                "flags": 64,
                                                "start": 36,
                                                "end": 43
                                            },
                                            "operand": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 130,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 46,
                                                            "end": 49
                                                        },
                                                        "expression": {
                                                            "kind": 208,
                                                            "awaitKeyword": {
                                                                "kind": 82032,
                                                                "flags": 0,
                                                                "start": 50,
                                                                "end": 55
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 55,
                                                                "end": 57
                                                            },
                                                            "flags": 32,
                                                            "start": 50,
                                                            "end": 57
                                                        },
                                                        "flags": 32,
                                                        "start": 45,
                                                        "end": 58
                                                    },
                                                    "flags": 32,
                                                    "start": 45,
                                                    "end": 59
                                                },
                                                "flags": 32,
                                                "start": 43,
                                                "end": 60
                                            },
                                            "flags": 32,
                                            "start": 36,
                                            "end": 60
                                        },
                                        "flags": 32,
                                        "start": 31,
                                        "end": 60
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 61
                },
                "flags": 32,
                "start": 18,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 61
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 66,
                "end": 66
            },
            "flags": 16,
            "start": 64,
            "end": 67
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 67,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "async function a(){     async ([y] = delete ((foo[await x]))) => {};     }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript


{
}

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 61, end: 64
✖ Declaration or statement expected - start: 68, end: 74

```

