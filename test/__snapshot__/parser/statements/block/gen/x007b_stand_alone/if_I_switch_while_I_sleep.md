# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: if I switch while I sleep
## Input

`````js
{ if I switch while I sleep
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
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 768,
                            "start": 1,
                            "end": 4
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 768,
                            "start": 4,
                            "end": 6
                        },
                        "consequent": {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 768,
                                "start": 6,
                                "end": 13
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 13,
                                "end": 13
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [],
                                "flags": 128,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 128,
                            "start": 6,
                            "end": 13
                        },
                        "elseKeyword": null,
                        "alternate": null,
                        "flags": 128,
                        "start": 1,
                        "end": 13
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 768,
                            "start": 13,
                            "end": 19
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 768,
                            "start": 19,
                            "end": 21
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "sleep",
                                "rawText": "sleep",
                                "flags": 768,
                                "start": 21,
                                "end": 27
                            },
                            "flags": 128,
                            "start": 21,
                            "end": 27
                        },
                        "flags": 128,
                        "start": 13,
                        "end": 27
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "{ if I switch while I sleep",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 4, end: 6
@{x2716}@ Unexpected token. - start: 6, end: 13
@{x2716}@ Unexpected token. - start: 13, end: 19
@{x2716}@ Expression expected - start: 13, end: 19
@{x2716}@ Unexpected token. - start: 13, end: 19
@{x2716}@ Unexpected token. - start: 13, end: 19
@{x2716}@ Unexpected token. - start: 13, end: 19
@{x2716}@ Unexpected token. - start: 19, end: 21
@{x2716}@ Unexpected token. - start: 21, end: 27
@{x2716}@ Unexpected token. - start: 27, end: 27

```

