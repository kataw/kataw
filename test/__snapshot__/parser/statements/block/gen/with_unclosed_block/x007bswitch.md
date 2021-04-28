# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: {switch
## Input

`````js
{ {} finally(x) { {switch
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
                            "statements": [],
                            "multiLine": false,
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 16,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 13,
                        "end": 14
                    }
                ],
                "multiLine": false,
                "flags": 16,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
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
                                    "kind": 160,
                                    "switchKeyword": {
                                        "kind": 37757024,
                                        "flags": 0,
                                        "start": 19,
                                        "end": 25
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 68,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "caseBlock": {
                                        "kind": 152,
                                        "clauses": [],
                                        "flags": 16,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "flags": 16,
                                    "start": 19,
                                    "end": 25
                                }
                            ],
                            "multiLine": false,
                            "flags": 16,
                            "start": 19,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 25
                    }
                ],
                "multiLine": false,
                "flags": 16,
                "start": 17,
                "end": 25
            },
            "flags": 16,
            "start": 15,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "{ {} finally(x) { {switch",
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
✖ Statement expected - start: 14, end: 15
✖ Expression expected - start: 25, end: 25

```

