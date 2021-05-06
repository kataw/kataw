# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: {switch{
## Input

`````js
{ [catch] {switch{
`````

## Output
### CST

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
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 3
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 8
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [
                                    {
                                        "kind": 160,
                                        "switchKeyword": {
                                            "kind": 37757024,
                                            "flags": 0,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "expression": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 18,
                                                "end": 18
                                            },
                                            "flags": 32,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "caseBlock": {
                                            "kind": 152,
                                            "clauses": [],
                                            "flags": 16,
                                            "start": 18,
                                            "end": 18
                                        },
                                        "flags": 16,
                                        "start": 11,
                                        "end": 18
                                    }
                                ],
                                "flags": 16,
                                "start": 11,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 9,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "{ [catch] {switch{",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 8
✖ 'try' expected - start: 3, end: 8
✖ The parser expected to find a '}' to match the '{' token here - start: 18, end: 18

```

