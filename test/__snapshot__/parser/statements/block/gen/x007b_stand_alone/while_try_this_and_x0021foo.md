# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: while try this and !foo
## Input

`````js
{ while try this and !foo
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
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 1,
                            "start": 0,
                            "end": 7
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 7,
                            "end": 7
                        },
                        "statement": {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 7,
                                "start": 0,
                                "end": 11
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 11,
                                    "end": 11
                                },
                                "flags": 128,
                                "start": 11,
                                "end": 11
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 16,
                                    "end": 16
                                },
                                "flags": 128,
                                "start": 16,
                                "end": 16
                            },
                            "flags": 128,
                            "start": 7,
                            "end": 16
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 16
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "and",
                            "rawText": "and",
                            "flags": 768,
                            "start": 16,
                            "end": 20
                        },
                        "flags": 128,
                        "start": 16,
                        "end": 20
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 20,
                                "start": 512,
                                "end": 22
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 22,
                                "end": 25
                            },
                            "flags": 256,
                            "start": 20,
                            "end": 25
                        },
                        "flags": 128,
                        "start": 20,
                        "end": 25
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "{ while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 7, end: 11

```

