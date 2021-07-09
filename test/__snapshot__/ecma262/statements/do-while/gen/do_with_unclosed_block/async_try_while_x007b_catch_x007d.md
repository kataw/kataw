# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_with_unclosed_block
> :: test: do with unclosed block
> :: case: async try while { catch }
## Options

`````js
{}
`````
## Input

`````js
do {} while (x) { async try while { catch }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
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
                "start": 2,
                "end": 5
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 5,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 14
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 23
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 17,
                        "end": 23
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 27
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 27
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 27
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 27
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 27
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 27
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 33
                        },
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "catch",
                                        "rawText": "catch",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 41
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 33,
                            "end": 43
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 43
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 43,
                            "end": 43
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 27,
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
    "isModule": false,
    "source": "do {} while (x) { async try while { catch }",
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
✖ Expected a `;` - start: 23, end: 27
✖ Declaration or statement expected - start: 27, end: 33
✖ Missing an opening parentheses - '( - start: 34, end: 35
✖ Property definition expected. Did you mean to use a ':'? - start: 41, end: 43
✖ Declaration or statement expected - start: 42, end: 43

```

