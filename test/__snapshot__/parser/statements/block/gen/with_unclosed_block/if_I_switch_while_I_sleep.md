# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: if I switch while I sleep
## Input

`````js
{ {} finally(x) { if I switch while I sleep
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
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
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
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 13,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 0,
                            "start": 17,
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
                        "consequent": {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 0,
                                "start": 22,
                                "end": 29
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 29,
                                "end": 29
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [],
                                "flags": 16,
                                "start": 29,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 22,
                            "end": 29
                        },
                        "elseKeyword": null,
                        "alternate": null,
                        "flags": 16,
                        "start": 17,
                        "end": 29
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 0,
                            "start": 29,
                            "end": 35
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "start": 35,
                            "end": 37
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "sleep",
                                "rawText": "sleep",
                                "flags": 96,
                                "start": 37,
                                "end": 43
                            },
                            "flags": 16,
                            "start": 37,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 29,
                        "end": 43
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 43
            },
            "flags": 16,
            "start": 15,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { if I switch while I sleep",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 14, end: 15
✖ Expected a ')' to match the '(' token here - start: 22, end: 29
✖ Expression expected - start: 29, end: 35
✖ Expected a ')' to match the '(' token here - start: 37, end: 43

```

