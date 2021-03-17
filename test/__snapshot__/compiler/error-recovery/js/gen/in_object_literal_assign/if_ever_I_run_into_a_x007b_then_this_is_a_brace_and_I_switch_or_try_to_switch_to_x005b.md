# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_object_literal_assign
> :: test: in object literal assign
> :: case: if ever I run into a {, then this is a brace and I switch or try to switch to [
## Input

`````js
x = { x = if ever I run into a {, then this is a brace and I switch or try to switch to [}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x = { x = if ever I run into a {, then this is a brace and I switch or try to switch to [}",
    "filename": "",
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
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65597,
                                "left": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 7
                                },
                                "isOptional": false,
                                "exclamation": false,
                                "right": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 9
                                },
                                "accessModifier": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 5,
                                "end": 9
                            },
                            {
                                "kind": 196711,
                                "text": "if",
                                "rawText": "if",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 12
                            },
                            {
                                "kind": 196711,
                                "text": "ever",
                                "rawText": "ever",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 17
                            },
                            {
                                "kind": 196711,
                                "text": "I",
                                "rawText": "I",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 19
                            },
                            {
                                "kind": 196711,
                                "text": "run",
                                "rawText": "run",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 23
                            },
                            {
                                "kind": 196711,
                                "text": "into",
                                "rawText": "into",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 28
                            },
                            {
                                "kind": 196711,
                                "text": "a",
                                "rawText": "a",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 30
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 30
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 30
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
                "start": 32,
                "end": 32
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 30,
            "end": 32
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "then",
                "rawText": "then",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 38
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 33,
            "end": 38
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260571,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 38,
                "end": 43
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 38,
            "end": 43
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "is",
                "rawText": "is",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 43,
                "end": 46
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 43,
            "end": 46
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "a",
                "rawText": "a",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 46,
                "end": 48
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 46,
            "end": 48
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "brace",
                "rawText": "brace",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 48,
                "end": 54
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 48,
            "end": 54
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
                "start": 54,
                "end": 58
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 54,
            "end": 58
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
                "start": 58,
                "end": 60
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 58,
            "end": 60
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "or",
                "rawText": "or",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 67,
                "end": 70
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 70,
                "end": 70
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 60,
            "end": 70
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
                    "start": 74,
                    "end": 74
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 74,
                "end": 74
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
                    "start": 74,
                    "end": 74
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 74,
                "end": 74
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 70,
            "end": 74
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
                "start": 74,
                "end": 77
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 74,
            "end": 77
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 67174980,
                "member": {
                    "kind": 196712,
                    "text": "to",
                    "rawText": "to",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 87
                },
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 89,
                    "end": 89
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 87,
                "end": 89
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 89,
                "end": 90
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 77,
            "end": 90
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 39,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 44,
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
            "message": "';' expected.",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 55,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 59,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 61,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 68,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 71,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 75,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 78,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 85,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 89,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

