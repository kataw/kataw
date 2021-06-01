# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_stand_alone
> :: test: { stand alone
> :: case: if I switch while I sleep
## Input

`````js
{ if I switch while I sleep
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
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 80,
                            "start": 1,
                            "end": 4
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "start": 4,
                            "end": 6
                        },
                        "consequent": {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 80,
                                "start": 6,
                                "end": 13
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 13,
                                "end": 13
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [],
                                "flags": 16,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 6,
                            "end": 13
                        },
                        "elseKeyword": null,
                        "alternate": null,
                        "flags": 16,
                        "start": 1,
                        "end": 13
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "start": 13,
                            "end": 19
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "start": 19,
                            "end": 21
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "sleep",
                                "rawText": "sleep",
                                "flags": 96,
                                "start": 21,
                                "end": 27
                            },
                            "flags": 16,
                            "start": 21,
                            "end": 27
                        },
                        "flags": 16,
                        "start": 13,
                        "end": 27
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "{ if I switch while I sleep",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 4, end: 6
✖ Declaration or statement expected - start: 6, end: 13
✖ Missing an opening parentheses - '( - start: 13, end: 19
✖ Missing an opening parentheses - '( - start: 19, end: 21
✖ Declaration or statement expected - start: 21, end: 27

```

