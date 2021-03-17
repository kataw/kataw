# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_head_and_body
> :: test: in arrow head and body
> :: case: for yesterday was bad so I switch to summer for this clothes or I try
## Input

`````js
(for yesterday was bad so I switch to summer for this clothes or I try) => {x = {for yesterday was bad so I switch to summer for this clothes or I try}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(for yesterday was bad so I switch to summer for this clothes or I try) => {x = {for yesterday was bad so I switch to summer for this clothes or I try}}",
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
                "kind": 196712,
                "text": "yesterday",
                "rawText": "yesterday",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 14
            },
            "condition": {
                "kind": 196712,
                "text": "bad",
                "rawText": "bad",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 22
            },
            "incrementor": {
                "kind": 196712,
                "text": "was",
                "rawText": "was",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 18
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "so",
                    "rawText": "so",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 25
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 25
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 1,
            "end": 25
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "I",
                "rawText": "I",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 25,
            "end": 27
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
                "start": 34,
                "end": 37
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 37
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 27,
            "end": 37
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "summer",
                "rawText": "summer",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 44
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 37,
            "end": 44
        },
        {
            "kind": 2099288,
            "initializer": {
                "kind": 4260571,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 48,
                "end": 53
            },
            "condition": {
                "kind": 196712,
                "text": "or",
                "rawText": "or",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 61,
                "end": 64
            },
            "incrementor": {
                "kind": 196712,
                "text": "clothes",
                "rawText": "clothes",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 53,
                "end": 61
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "I",
                    "rawText": "I",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 66
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 64,
                "end": 66
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 44,
            "end": 66
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
                    "start": 70,
                    "end": 70
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 70,
                "end": 70
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
                    "start": 70,
                    "end": 70
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 70,
                "end": 70
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 66,
            "end": 70
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
                                "start": 76,
                                "end": 77
                            },
                            "operator": "=",
                            "right": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 196711,
                                            "text": "for",
                                            "rawText": "for",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 81,
                                            "end": 84
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "yesterday",
                                            "rawText": "yesterday",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 84,
                                            "end": 94
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "was",
                                            "rawText": "was",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 94,
                                            "end": 98
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "bad",
                                            "rawText": "bad",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 98,
                                            "end": 102
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "so",
                                            "rawText": "so",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 102,
                                            "end": 105
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "I",
                                            "rawText": "I",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 105,
                                            "end": 107
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "switch",
                                            "rawText": "switch",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 107,
                                            "end": 114
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "to",
                                            "rawText": "to",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 114,
                                            "end": 117
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "summer",
                                            "rawText": "summer",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 117,
                                            "end": 124
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "for",
                                            "rawText": "for",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 124,
                                            "end": 128
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 128,
                                            "end": 133
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "clothes",
                                            "rawText": "clothes",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 133,
                                            "end": 141
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "or",
                                            "rawText": "or",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 141,
                                            "end": 144
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "I",
                                            "rawText": "I",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 144,
                                            "end": 146
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "try",
                                            "rawText": "try",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 146,
                                            "end": 150
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 81,
                                    "end": 150
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 79,
                                "end": 151
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 76,
                            "end": 151
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 76,
                        "end": 151
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 76,
                "end": 151
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 74,
            "end": 152
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
            "message": "'(' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
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
            "message": "')' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 26,
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
            "message": "'(' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 45,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 62,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 65,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 67,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 70,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 72,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 85,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 95,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 99,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 103,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 106,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 108,
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
            "start": 118,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 125,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 129,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 134,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 142,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 145,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 147,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 152
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

