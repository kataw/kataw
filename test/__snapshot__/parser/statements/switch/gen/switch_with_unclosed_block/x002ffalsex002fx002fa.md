# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: /false//a
## Input

`````js
switch {} default(x) { /false//a
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
                "flags": 256,
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
                            "flags": 9,
                            "start": 0,
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
                                        "flags": 768,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "flags": 256,
                                    "start": 17,
                                    "end": 20
                                },
                                "flags": 128,
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
                                                "kind": 198,
                                                "left": {
                                                    "kind": 221,
                                                    "text": "/false/",
                                                    "flags": 768,
                                                    "start": 22,
                                                    "end": 30
                                                },
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "flags": 512,
                                                    "start": 30,
                                                    "end": 31
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 31,
                                                    "end": 32
                                                },
                                                "flags": 256,
                                                "start": 22,
                                                "end": 32
                                            },
                                            "flags": 128,
                                            "start": 22,
                                            "end": 32
                                        }
                                    ],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 22,
                                    "end": 32
                                },
                                "flags": 128,
                                "start": 20,
                                "end": 32
                            }
                        ],
                        "flags": 128,
                        "start": 9,
                        "end": 32
                    }
                ],
                "flags": 128,
                "start": 9,
                "end": 32
            },
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "switch {} default(x) { /false//a",
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
✔ No errors
```

