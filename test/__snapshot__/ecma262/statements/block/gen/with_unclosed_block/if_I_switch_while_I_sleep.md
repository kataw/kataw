# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_block
> :: test: with unclosed block
> :: case: if I switch while I sleep
## Options

`````js
{}
`````
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
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
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
                                "transformFlags": 0,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 12,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 15
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 15
                    },
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
                                        "start": 17,
                                        "end": 20
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "I",
                                        "rawText": "I",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "consequent": {
                                        "kind": 160,
                                        "switchKeyword": {
                                            "kind": 37757024,
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 29
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 29
                                        },
                                        "caseBlock": {
                                            "kind": 152,
                                            "clauses": [],
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 29
                                        },
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 29
                                    },
                                    "elseKeyword": null,
                                    "alternate": null,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 29
                                },
                                {
                                    "kind": 154,
                                    "whileKeyword": {
                                        "kind": 37757028,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 35
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "I",
                                        "rawText": "I",
                                        "flags": 96,
                                        "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 43
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 43
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 43
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 43
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { if I switch while I sleep",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ Missing an opening parentheses - '( - start: 21, end: 22
✖ Declaration or statement expected - start: 23, end: 29
✖ Missing an opening parentheses - '( - start: 30, end: 35
✖ Missing an opening parentheses - '( - start: 36, end: 37
✖ Declaration or statement expected - start: 38, end: 43

```

