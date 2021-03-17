# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_throw_stmt
> :: test: in throw stmt
> :: case: for yesterday was bad so I switch to summer for this clothes or I try
## Input

`````js
throw for yesterday was bad so I switch to summer for this clothes or I try
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "throw for yesterday was bad so I switch to summer for this clothes or I try",
    "filename": "",
    "statements": [
        {
            "kind": 2097373,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 5
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 5
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
                "start": 9,
                "end": 19
            },
            "condition": {
                "kind": 196712,
                "text": "bad",
                "rawText": "bad",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 27
            },
            "incrementor": {
                "kind": 196712,
                "text": "was",
                "rawText": "was",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 23
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
                    "start": 27,
                    "end": 30
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 30
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 5,
            "end": 30
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
                "start": 30,
                "end": 32
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 30,
            "end": 32
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
                "start": 39,
                "end": 42
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 42,
                "end": 42
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 32,
            "end": 42
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
                "start": 42,
                "end": 49
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 42,
            "end": 49
        },
        {
            "kind": 2099288,
            "initializer": {
                "kind": 4260571,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 53,
                "end": 58
            },
            "condition": {
                "kind": 196712,
                "text": "or",
                "rawText": "or",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 66,
                "end": 69
            },
            "incrementor": {
                "kind": 196712,
                "text": "clothes",
                "rawText": "clothes",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 58,
                "end": 66
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
                    "start": 69,
                    "end": 71
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 69,
                "end": 71
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 49,
            "end": 71
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
                    "start": 75,
                    "end": 75
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 75,
                "end": 75
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
                    "start": 75,
                    "end": 75
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 75,
                "end": 75
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 71,
            "end": 75
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 28,
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
            "message": "';' expected.",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 40,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 43,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 50,
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
            "message": "';' expected.",
            "start": 59,
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
            "message": "')' expected.",
            "start": 70,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 72,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

