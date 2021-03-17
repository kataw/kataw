# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_body
> :: test: in arrow body
> :: case: I try and try and try, but soon to give up. I switch to better code!
## Input

`````js
([ I try and try and try, but soon to give up. I switch to better code! ]) => {x = {I try and try and try, but soon to give up. I switch to better code!}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ I try and try and try, but soon to give up. I switch to better code! ]) => {x = {I try and try and try, but soon to give up. I switch to better code!}}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 196712,
                                "text": "I",
                                "rawText": "I",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 4
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 4
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 4
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 4
        },
        {
            "kind": 2097375,
            "block": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 8
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 8
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 4,
            "end": 8
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "and",
                "rawText": "and",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 8,
            "end": 12
        },
        {
            "kind": 2097375,
            "block": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 16
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 16
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 12,
            "end": 16
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "and",
                "rawText": "and",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 20
        },
        {
            "kind": 2097375,
            "block": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 24
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 24
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 24
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 24
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 24
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "but",
                "rawText": "but",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 29
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 25,
            "end": 29
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "soon",
                "rawText": "soon",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 34
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 29,
            "end": 34
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "to",
                "rawText": "to",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 34,
                "end": 37
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 34,
            "end": 37
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "give",
                "rawText": "give",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 42
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 37,
            "end": 42
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 196712,
                    "text": "up",
                    "rawText": "up",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 45
                },
                "expression": {
                    "kind": 196711,
                    "text": "I",
                    "rawText": "I",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 48
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 45,
                "end": 48,
                "period": {
                    "kind": 255,
                    "pos": 45,
                    "end": 46
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 42,
            "end": 48
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "to",
                "rawText": "to",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 55,
                "end": 58
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 58,
                "end": 58
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 48,
            "end": 58
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "better",
                "rawText": "better",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 58,
                "end": 65
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 58,
            "end": 65
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 74398,
                "expression": {
                    "kind": 196712,
                    "text": "code",
                    "rawText": "code",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 70
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 70,
                "end": 71
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 65,
            "end": 71
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
                                "start": 79,
                                "end": 80
                            },
                            "operator": "=",
                            "right": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 98984,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 196711,
                                                "text": "I",
                                                "rawText": "I",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 84,
                                                "end": 85
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "try",
                                                "rawText": "try",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 85,
                                                "end": 89
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "and",
                                                "rawText": "and",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 89,
                                                "end": 93
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "try",
                                                "rawText": "try",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 93,
                                                "end": 97
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "and",
                                                "rawText": "and",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 97,
                                                "end": 101
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "try",
                                                "rawText": "try",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 101,
                                                "end": 105
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "but",
                                                "rawText": "but",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 106,
                                                "end": 110
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "soon",
                                                "rawText": "soon",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 110,
                                                "end": 115
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "to",
                                                "rawText": "to",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 115,
                                                "end": 118
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "give",
                                                "rawText": "give",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 118,
                                                "end": 123
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "up",
                                                "rawText": "up",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 123,
                                                "end": 126
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 84,
                                        "end": 126
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 82,
                                    "end": 126
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "I",
                                    "rawText": "I",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 127,
                                    "end": 129
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 126,
                                "end": 129,
                                "period": {
                                    "kind": 255,
                                    "pos": 126,
                                    "end": 127
                                }
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 79,
                            "end": 129
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 129
                    },
                    {
                        "kind": 2097362,
                        "expression": {
                            "kind": 196712,
                            "text": "to",
                            "rawText": "to",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 136,
                            "end": 139
                        },
                        "caseBlock": {
                            "kind": 2093,
                            "clauses": [],
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 139,
                            "end": 139
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 129,
                        "end": 139
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "better",
                            "rawText": "better",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 139,
                            "end": 146
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 139,
                        "end": 146
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 74398,
                            "expression": {
                                "kind": 196712,
                                "text": "code",
                                "rawText": "code",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 146,
                                "end": 151
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 151,
                            "end": 152
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 146,
                        "end": 152
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 79,
                "end": 152
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 77,
            "end": 153
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 43,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 56,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 59,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 66,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 72,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 73,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 75,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 86,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 90,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 94,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 98,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 102,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 111,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 116,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 119,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 124,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 126,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 130,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 137,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 140,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 147,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 153,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 154
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

