# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: if I switch while I sleep
## Input

`````js
{( if I switch while I sleep
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
                            "kind": 121,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 2
                    },
                    {
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 768,
                            "start": 2,
                            "end": 5
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        },
                        "consequent": {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 768,
                                "start": 7,
                                "end": 14
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 14,
                                "end": 14
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [],
                                "flags": 128,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 128,
                            "start": 7,
                            "end": 14
                        },
                        "elseKeyword": null,
                        "alternate": null,
                        "flags": 128,
                        "start": 2,
                        "end": 14
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 768,
                            "start": 14,
                            "end": 20
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 768,
                            "start": 20,
                            "end": 22
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "sleep",
                                "rawText": "sleep",
                                "flags": 768,
                                "start": 22,
                                "end": 28
                            },
                            "flags": 128,
                            "start": 22,
                            "end": 28
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 28
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "{( if I switch while I sleep",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 2, end: 5
@{x2716}@ Unexpected token. - start: 2, end: 5
@{x2716}@ Unexpected token. - start: 2, end: 5
@{x2716}@ Unexpected token. - start: 5, end: 7
@{x2716}@ Unexpected token. - start: 7, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 20
@{x2716}@ Expression expected - start: 14, end: 20
@{x2716}@ Unexpected token. - start: 14, end: 20
@{x2716}@ Unexpected token. - start: 14, end: 20
@{x2716}@ Unexpected token. - start: 14, end: 20
@{x2716}@ Unexpected token. - start: 20, end: 22
@{x2716}@ Unexpected token. - start: 22, end: 28
@{x2716}@ Unexpected token. - start: 28, end: 28

```

