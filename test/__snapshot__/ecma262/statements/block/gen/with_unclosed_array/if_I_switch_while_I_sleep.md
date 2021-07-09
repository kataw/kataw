# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: if I switch while I sleep
## Options

`````js
{}
`````
## Input

`````js
{[ if I switch while I sleep
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
                                "transformFlags": 0,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 2
                    },
                    {
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 5
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "I",
                            "rawText": "I",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "consequent": {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 14
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 14
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 14
                        },
                        "elseKeyword": null,
                        "alternate": null,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 14
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 14,
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
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "sleep",
                                "rawText": "sleep",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 28
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 22,
                            "end": 28
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "{[ if I switch while I sleep",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 5
✖ Missing an opening parentheses - '( - start: 6, end: 7
✖ Declaration or statement expected - start: 8, end: 14
✖ Missing an opening parentheses - '( - start: 15, end: 20
✖ Missing an opening parentheses - '( - start: 21, end: 22
✖ Declaration or statement expected - start: 23, end: 28

```

