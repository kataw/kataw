# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: if I switch while I sleep
## Input

`````js
{ { { if I switch while I sleep
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
                                                "kind": 164,
                                                "ifKeyword": {
                                                    "kind": 37757019,
                                                    "flags": 768,
                                                    "start": 5,
                                                    "end": 8
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "I",
                                                    "rawText": "I",
                                                    "flags": 768,
                                                    "start": 8,
                                                    "end": 10
                                                },
                                                "consequent": {
                                                    "kind": 160,
                                                    "switchKeyword": {
                                                        "kind": 37757024,
                                                        "flags": 768,
                                                        "start": 10,
                                                        "end": 17
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "autofix": 0,
                                                        "flags": 12,
                                                        "start": 17,
                                                        "end": 17
                                                    },
                                                    "caseBlock": {
                                                        "kind": 152,
                                                        "clauses": [],
                                                        "flags": 128,
                                                        "start": 17,
                                                        "end": 17
                                                    },
                                                    "flags": 128,
                                                    "start": 10,
                                                    "end": 17
                                                },
                                                "elseKeyword": null,
                                                "alternate": null,
                                                "flags": 128,
                                                "start": 5,
                                                "end": 17
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 5,
                                        "end": 17
                                    },
                                    "flags": 128,
                                    "start": 3,
                                    "end": 17
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 3,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 17
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 17,
                "end": 23
            },
            "expression": {
                "kind": 134299649,
                "text": "I",
                "rawText": "I",
                "flags": 768,
                "start": 23,
                "end": 25
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "sleep",
                    "rawText": "sleep",
                    "flags": 768,
                    "start": 25,
                    "end": 31
                },
                "flags": 128,
                "start": 25,
                "end": 31
            },
            "flags": 128,
            "start": 17,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "{ { { if I switch while I sleep",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

