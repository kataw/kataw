# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: async try while { catch }
## Options

`````js
{}
`````
## Input

`````js
{ async try while { catch }
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
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 7
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 11
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 11
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 11
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
                                "start": 11,
                                "end": 11
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 11
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 17
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
                                        "start": 19,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 25
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 17,
                            "end": 27
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 27
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 27,
                            "end": 27
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 27
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "{ async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' is not allowed here. Did you mean ';'? - start: 7, end: 11
✖ 'catch' expected - start: 11, end: 17
✖ Missing an opening parentheses - '( - start: 18, end: 19
✖ Property definition expected. Did you mean to use a ':'? - start: 25, end: 27
✖ Declaration or statement expected - start: 26, end: 27

```

