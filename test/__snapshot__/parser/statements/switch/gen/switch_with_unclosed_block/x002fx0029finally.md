# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: /)finally
## Input

`````js
switch {} default(x) { /)finally
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
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 32,
                "start": 6,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 9,
                            "end": 17
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 20
                                },
                                "flags": 16,
                                "start": 17,
                                "end": 20
                            },
                            {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 221,
                                                "text": "/)finally",
                                                "flags": 96,
                                                "start": 22,
                                                "end": 32
                                            },
                                            "flags": 16,
                                            "start": 22,
                                            "end": 32
                                        }
                                    ],
                                    "multiLine": false,
                                    "flags": 16,
                                    "start": 22,
                                    "end": 32
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 32
                            }
                        ],
                        "flags": 16,
                        "start": 9,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 9,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "switch {} default(x) { /)finally",
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
✖ Unexpected token. - start: 22, end: 24

```

