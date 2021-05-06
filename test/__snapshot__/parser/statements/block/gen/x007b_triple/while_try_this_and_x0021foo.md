# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: while try this and !foo
## Input

`````js
{ { { while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 154,
                                                "whileKeyword": {
                                                    "kind": 37757028,
                                                    "flags": 0,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 68,
                                                    "start": 11,
                                                    "end": 11
                                                },
                                                "statement": {
                                                    "kind": 159,
                                                    "tryKeyword": {
                                                        "kind": 37757027,
                                                        "flags": 0,
                                                        "start": 11,
                                                        "end": 15
                                                    },
                                                    "block": {
                                                        "kind": 249,
                                                        "block": {
                                                            "kind": 124,
                                                            "statements": [],
                                                            "flags": 16,
                                                            "start": 15,
                                                            "end": 15
                                                        },
                                                        "flags": 16,
                                                        "start": 15,
                                                        "end": 15
                                                    },
                                                    "catchClause": null,
                                                    "finallyKeyword": null,
                                                    "finallyBlock": {
                                                        "kind": 249,
                                                        "block": {
                                                            "kind": 124,
                                                            "statements": [],
                                                            "flags": 16,
                                                            "start": 20,
                                                            "end": 20
                                                        },
                                                        "flags": 16,
                                                        "start": 20,
                                                        "end": 20
                                                    },
                                                    "flags": 16,
                                                    "start": 11,
                                                    "end": 20
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 20
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "and",
                                                    "rawText": "and",
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 24
                                                },
                                                "flags": 16,
                                                "start": 20,
                                                "end": 24
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 65584,
                                                        "flags": 64,
                                                        "start": 24,
                                                        "end": 26
                                                    },
                                                    "operand": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 26,
                                                        "end": 29
                                                    },
                                                    "flags": 32,
                                                    "start": 24,
                                                    "end": 29
                                                },
                                                "flags": 16,
                                                "start": 24,
                                                "end": 29
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 29
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 29
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "{ { { while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 11, end: 15
✖ Expected a `;` - start: 24, end: 26
✖ The parser expected to find a '}' to match the '{' token here - start: 29, end: 29

```

