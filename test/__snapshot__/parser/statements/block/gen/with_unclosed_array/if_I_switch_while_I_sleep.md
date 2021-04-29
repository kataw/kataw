# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: if I switch while I sleep
## Input

`````js
{[ if I switch while I sleep
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
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 2
                    },
                    {
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 0,
                            "start": 2,
                            "end": 5
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "consequent": {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 0,
                                "start": 7,
                                "end": 14
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 14,
                                "end": 14
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [],
                                "flags": 16,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 16,
                            "start": 7,
                            "end": 14
                        },
                        "elseKeyword": null,
                        "alternate": null,
                        "flags": 16,
                        "start": 2,
                        "end": 14
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 0,
                            "start": 14,
                            "end": 20
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "sleep",
                                "rawText": "sleep",
                                "flags": 96,
                                "start": 22,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 22,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "{[ if I switch while I sleep",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 14, end: 20

```

