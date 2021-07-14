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
                "text": "a",
                "rawText": "a",
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
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "transformFlags": 0,
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
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 33
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 33
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 31,
                                                "end": 34
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 36
                                            },
                                            "right": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 4259886,
                                                    "flags": 96,
                                                    "transformFlags": 0,
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
                                                                "transformFlags": 0,
                                                                "start": 46,
                                                                "end": 49
                                                            },
                                                            "expression": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 50,
                                                                    "end": 55
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 55,
                                                                    "end": 57
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 50,
                                                                "end": 57
                                                            },
                                                            "flags": 536870944,
                                                            "transformFlags": 4,
                                                            "start": 45,
                                                            "end": 58
                                                        },
                                                        "flags": 45,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 59
                                                    },
                                                    "flags": 43,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 60
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 36,
                                                "end": 60
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 31,
                                            "end": 60
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 268435490,
                                "transformFlags": 1,
                                "start": 19,
                                "end": 61
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 19,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 61
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 61
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 61
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 66,
                "end": 66
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 64,
            "end": 67
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 67,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "async function a(){     async ([y] = delete ((foo[await x]))) => {};     }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 61, end: 64
✖ Declaration or statement expected - start: 68, end: 74

```

