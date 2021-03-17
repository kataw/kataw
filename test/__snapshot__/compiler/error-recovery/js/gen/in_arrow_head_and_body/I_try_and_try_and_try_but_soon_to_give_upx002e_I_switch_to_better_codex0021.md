# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_head_and_body
> :: test: in arrow head and body
> :: case: I try and try and try, but soon to give up. I switch to better code!
## Input

`````js
(I try and try and try, but soon to give up. I switch to better code!) => {x = {I try and try and try, but soon to give up. I switch to better code!}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(I try and try and try, but soon to give up. I switch to better code!) => {x = {I try and try and try, but soon to give up. I switch to better code!}}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 196712,
                    "text": "I",
                    "rawText": "I",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 2
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 2
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
                    "start": 6,
                    "end": 6
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 6
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
                    "start": 6,
                    "end": 6
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 6
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 2,
            "end": 6
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
                "start": 6,
                "end": 10
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 10
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
                    "start": 14,
                    "end": 14
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 14
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
                    "start": 14,
                    "end": 14
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 14
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
                "start": 14,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 14,
            "end": 18
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
                    "start": 22,
                    "end": 22
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 22
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
                    "start": 22,
                    "end": 22
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 22
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 18,
            "end": 22
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
                "start": 23,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 23,
            "end": 27
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
                "start": 27,
                "end": 32
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 27,
            "end": 32
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
                "start": 32,
                "end": 35
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 32,
            "end": 35
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
                "start": 35,
                "end": 40
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 35,
            "end": 40
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
                    "start": 40,
                    "end": 43
                },
                "expression": {
                    "kind": 196711,
                    "text": "I",
                    "rawText": "I",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 46
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 43,
                "end": 46,
                "period": {
                    "kind": 255,
                    "pos": 43,
                    "end": 44
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 40,
            "end": 46
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
                "start": 53,
                "end": 56
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 56,
                "end": 56
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 46,
            "end": 56
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
                "start": 56,
                "end": 63
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 56,
            "end": 63
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
                    "start": 63,
                    "end": 68
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 68,
                "end": 69
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 63,
            "end": 69
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
                                "start": 75,
                                "end": 76
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
                                                "start": 80,
                                                "end": 81
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "try",
                                                "rawText": "try",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 81,
                                                "end": 85
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "and",
                                                "rawText": "and",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 85,
                                                "end": 89
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "try",
                                                "rawText": "try",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 89,
                                                "end": 93
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "and",
                                                "rawText": "and",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 93,
                                                "end": 97
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "try",
                                                "rawText": "try",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 97,
                                                "end": 101
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "but",
                                                "rawText": "but",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 102,
                                                "end": 106
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "soon",
                                                "rawText": "soon",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 106,
                                                "end": 111
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "to",
                                                "rawText": "to",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 111,
                                                "end": 114
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "give",
                                                "rawText": "give",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 114,
                                                "end": 119
                                            },
                                            {
                                                "kind": 196711,
                                                "text": "up",
                                                "rawText": "up",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 119,
                                                "end": 122
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 80,
                                        "end": 122
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 122
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "I",
                                    "rawText": "I",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 123,
                                    "end": 125
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 122,
                                "end": 125,
                                "period": {
                                    "kind": 255,
                                    "pos": 122,
                                    "end": 123
                                }
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 75,
                            "end": 125
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 75,
                        "end": 125
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
                            "start": 132,
                            "end": 135
                        },
                        "caseBlock": {
                            "kind": 2093,
                            "clauses": [],
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 135,
                            "end": 135
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 125,
                        "end": 135
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
                            "start": 135,
                            "end": 142
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 135,
                        "end": 142
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
                                "start": 142,
                                "end": 147
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 147,
                            "end": 148
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 142,
                        "end": 148
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 75,
                "end": 148
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 73,
            "end": 149
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 7,
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
            "message": "'{' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 47,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 57,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 64,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 69,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 71,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 82,
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
            "start": 107,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 112,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 115,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 120,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 122,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 126,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 133,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 136,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 143,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 149,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 150
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

