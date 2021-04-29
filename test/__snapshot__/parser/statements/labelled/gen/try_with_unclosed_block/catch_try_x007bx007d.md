# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: try with unclosed block
> :: case: catch try {}
## Input

`````js
try {} finally(x) { catch try {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 0,
                "start": 6,
                "end": 14
            },
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 14,
                    "end": 14
                },
                "flags": 16,
                "start": 14,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 15,
                    "end": 16
                },
                "flags": 32,
                "start": 14,
                "end": 17
            },
            "flags": 16,
            "start": 14,
            "end": 17
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 16,
                            "start": 25,
                            "end": 25
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 31,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 29,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 19,
                "end": 32
            },
            "flags": 16,
            "start": 17,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "try {} finally(x) { catch try {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'try' expected - start: 19, end: 25

```

