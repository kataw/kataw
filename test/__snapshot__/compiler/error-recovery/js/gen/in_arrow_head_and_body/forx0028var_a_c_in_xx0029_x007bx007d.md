# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_head_and_body
> :: test: in arrow head and body
> :: case: for(var a,,,,,,,,,,,,,,,c in x) {}
## Input

`````js
(for(var a,,,,,,,,,,,,,,,c in x) {}) => {x = {for(var a,,,,,,,,,,,,,,,c in x) {}}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(for(var a,,,,,,,,,,,,,,,c in x) {}) => {x = {for(var a,,,,,,,,,,,,,,,c in x) {}}}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 1
        },
        {
            "kind": 2099288,
            "initializer": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 8,
                            "end": 10
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 8,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 10
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 11
            },
            "condition": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "incrementor": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 11
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 13
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 14
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 15
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 16
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 17
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 18
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 19
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 20
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 21
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 22
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 23
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 24
                        },
                        {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "c",
                                "rawText": "c",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 26
                            },
                            "operator": "in",
                            "right": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 31
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 31
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 31
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 31
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 1,
            "end": 31
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 34,
                "end": 34
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 32,
            "end": 35
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 65550,
                            "left": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 42
                            },
                            "operator": "=",
                            "right": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 16844946,
                                            "name": {
                                                "kind": 196711,
                                                "text": "for",
                                                "rawText": "for",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 49
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 53
                                            },
                                            "isSetter": false,
                                            "isGetter": false,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [
                                                        {
                                                            "kind": 2097233,
                                                            "expression": {
                                                                "kind": 65590,
                                                                "expressions": [
                                                                    {
                                                                        "kind": 196712,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 53,
                                                                        "end": 55
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 56,
                                                                        "end": 56
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 57,
                                                                        "end": 57
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 58,
                                                                        "end": 58
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 59,
                                                                        "end": 59
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 60,
                                                                        "end": 60
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 61,
                                                                        "end": 61
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 62,
                                                                        "end": 62
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 63,
                                                                        "end": 63
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 64,
                                                                        "end": 64
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 65,
                                                                        "end": 65
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 66,
                                                                        "end": 66
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 67,
                                                                        "end": 67
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 68,
                                                                        "end": 68
                                                                    },
                                                                    {
                                                                        "kind": 131322,
                                                                        "text": "",
                                                                        "flags": 3,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 69,
                                                                        "end": 69
                                                                    },
                                                                    {
                                                                        "kind": 65563,
                                                                        "left": {
                                                                            "kind": 196712,
                                                                            "text": "c",
                                                                            "rawText": "c",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 70,
                                                                            "end": 71
                                                                        },
                                                                        "operator": "in",
                                                                        "right": {
                                                                            "kind": 196712,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 74,
                                                                            "end": 76
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 70,
                                                                        "end": 76
                                                                    }
                                                                ],
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 53,
                                                                "end": 76
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 53,
                                                            "end": 76
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 53,
                                                    "end": 76
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 76
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 49,
                                            "end": 76
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 76
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 76
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 76
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 76
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 41,
                "end": 76
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 39,
            "end": 76
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 79,
                "end": 79
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 77,
            "end": 80
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 1,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 37,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 50,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 56,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 57,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 58,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 59,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 60,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 61,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 62,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 63,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 64,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 65,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 66,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 67,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 68,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 69,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 76,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 80,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 81,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 82
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

