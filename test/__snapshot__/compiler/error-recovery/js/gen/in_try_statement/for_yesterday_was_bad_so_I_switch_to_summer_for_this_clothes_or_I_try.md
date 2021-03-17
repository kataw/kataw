# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_try_statement
> :: test: in try statement
> :: case: for yesterday was bad so I switch to summer for this clothes or I try
## Input

`````js
try for yesterday was bad so I switch to summer for this clothes or I try
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "try for yesterday was bad so I switch to summer for this clothes or I try",
    "filename": "",
    "statements": [
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
                    "start": 3,
                    "end": 3
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 3
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
                    "start": 3,
                    "end": 3
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 3
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 3
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
                "start": 7,
                "end": 17
            },
            "condition": {
                "kind": 196712,
                "text": "bad",
                "rawText": "bad",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 25
            },
            "incrementor": {
                "kind": 196712,
                "text": "was",
                "rawText": "was",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 21
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
                    "start": 25,
                    "end": 28
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 28
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 3,
            "end": 28
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
                "start": 28,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 28,
            "end": 30
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
                "start": 37,
                "end": 40
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 40
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 30,
            "end": 40
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
                "start": 40,
                "end": 47
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 40,
            "end": 47
        },
        {
            "kind": 2099288,
            "initializer": {
                "kind": 4260571,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 51,
                "end": 56
            },
            "condition": {
                "kind": 196712,
                "text": "or",
                "rawText": "or",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 64,
                "end": 67
            },
            "incrementor": {
                "kind": 196712,
                "text": "clothes",
                "rawText": "clothes",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 56,
                "end": 64
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
                    "start": 67,
                    "end": 69
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 67,
                "end": 69
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 47,
            "end": 69
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
                    "start": 73,
                    "end": 73
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 73,
                "end": 73
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
                    "start": 73,
                    "end": 73
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 73,
                "end": 73
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 69,
            "end": 73
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 4,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 29,
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
            "message": "'(' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 48,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 52,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 57,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 65,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 68,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 70,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

