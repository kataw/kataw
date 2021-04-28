# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: try { !xxx
## Input

`````js
switch {} default(x) { try { !xxx
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
                                            "kind": 159,
                                            "tryKeyword": {
                                                "kind": 37757027,
                                                "flags": 0,
                                                "start": 22,
                                                "end": 26
                                            },
                                            "block": {
                                                "kind": 249,
                                                "block": {
                                                    "kind": 124,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 126,
                                                                "operandToken": {
                                                                    "kind": 65584,
                                                                    "flags": 64,
                                                                    "start": 28,
                                                                    "end": 30
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "xxx",
                                                                    "rawText": "xxx",
                                                                    "flags": 96,
                                                                    "start": 30,
                                                                    "end": 33
                                                                },
                                                                "flags": 32,
                                                                "start": 28,
                                                                "end": 33
                                                            },
                                                            "flags": 16,
                                                            "start": 28,
                                                            "end": 33
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "flags": 16,
                                                    "start": 28,
                                                    "end": 33
                                                },
                                                "flags": 16,
                                                "start": 26,
                                                "end": 33
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
                                                    "start": 33,
                                                    "end": 33
                                                },
                                                "flags": 16,
                                                "start": 33,
                                                "end": 33
                                            },
                                            "flags": 16,
                                            "start": 22,
                                            "end": 33
                                        }
                                    ],
                                    "multiLine": false,
                                    "flags": 16,
                                    "start": 22,
                                    "end": 33
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 33
                            }
                        ],
                        "flags": 16,
                        "start": 9,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 9,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "switch {} default(x) { try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
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

