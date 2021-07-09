# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: if I switch while I sleep
## Options

`````js
{}
`````
## Input

`````js
{ { { if I switch while I sleep
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
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
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 8
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "I",
                                                    "rawText": "I",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 10
                                                },
                                                "consequent": {
                                                    "kind": 160,
                                                    "switchKeyword": {
                                                        "kind": 37757024,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 10,
                                                        "end": 17
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 17,
                                                        "end": 17
                                                    },
                                                    "caseBlock": {
                                                        "kind": 152,
                                                        "clauses": [],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 17,
                                                        "end": 17
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 10,
                                                    "end": 17
                                                },
                                                "elseKeyword": null,
                                                "alternate": null,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 17
                                            },
                                            {
                                                "kind": 154,
                                                "whileKeyword": {
                                                    "kind": 37757028,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 23
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "I",
                                                    "rawText": "I",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 23,
                                                    "end": 25
                                                },
                                                "statement": {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "sleep",
                                                        "rawText": "sleep",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 25,
                                                        "end": 31
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4096,
                                                    "start": 25,
                                                    "end": 31
                                                },
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 31
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 31
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 31
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 31
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 31
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "{ { { if I switch while I sleep",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 9, end: 10
✖ Declaration or statement expected - start: 11, end: 17
✖ Missing an opening parentheses - '( - start: 18, end: 23
✖ Missing an opening parentheses - '( - start: 24, end: 25
✖ Declaration or statement expected - start: 26, end: 31

```

