# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw7/test\__snapshot__\parser\statements\block\gen\block_with_invalid_array
> :: test: block with invalid array
> :: case: if I switch while I sleep
## Input

`````js
{ [catch] if I switch while I sleep
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 3,
                                "end": 8
                            },
                            "catchParameter": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 8,
                                    "end": 8
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 16,
                            "start": 3,
                            "end": 8
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 9,
                "end": 12
            },
            "expression": {
                "kind": 134299649,
                "text": "I",
                "rawText": "I",
                "flags": 96,
                "start": 12,
                "end": 14
            },
            "consequent": {
                "kind": 160,
                "switchKeyword": {
                    "kind": 37757024,
                    "flags": 80,
                    "start": 14,
                    "end": 21
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 21,
                    "end": 21
                },
                "caseBlock": {
                    "kind": 152,
                    "clauses": [],
                    "flags": 16,
                    "start": 21,
                    "end": 21
                },
                "flags": 16,
                "start": 14,
                "end": 21
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 9,
            "end": 21
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 21,
                "end": 27
            },
            "expression": {
                "kind": 134299649,
                "text": "I",
                "rawText": "I",
                "flags": 96,
                "start": 27,
                "end": 29
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "sleep",
                    "rawText": "sleep",
                    "flags": 96,
                    "start": 29,
                    "end": 35
                },
                "flags": 16,
                "start": 29,
                "end": 35
            },
            "flags": 16,
            "start": 21,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "{ [catch] if I switch while I sleep",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 8
✖ 'try' expected - start: 3, end: 8
✖ The parser expected to find a '}' to match the '{' token here - start: 8, end: 9
✖ Missing an opening parentheses - '( - start: 12, end: 14
✖ Declaration or statement expected - start: 14, end: 21
✖ Missing an opening parentheses - '( - start: 21, end: 27
✖ Missing an opening parentheses - '( - start: 27, end: 29
✖ Declaration or statement expected - start: 29, end: 35

```

