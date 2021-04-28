# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: catch { try
## Input

`````js
switch[ catch { try
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 7,
                    "end": 7
                },
                "flags": 256,
                "start": 6,
                "end": 7
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 7,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 15,
                                "start": 0,
                                "end": 19
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 128,
                                "start": 19,
                                "end": 19
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
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 128,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 19
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 15,
                    "end": 19
                },
                "flags": 128,
                "start": 13,
                "end": 19
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
                    "start": 19,
                    "end": 19
                },
                "flags": 128,
                "start": 19,
                "end": 19
            },
            "flags": 128,
            "start": 7,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "switch[ catch { try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

