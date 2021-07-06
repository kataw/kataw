# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_block
> :: test: with unclosed block
> :: case: catch
## Options

`````js
{}
`````
## Input

`````js
{ {} finally(x) { catch
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
                                    "kind": 159,
                                    "tryKeyword": null,
                                    "block": {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [],
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "catchClause": {
                                        "kind": 173,
                                        "catchKeyword": {
                                            "kind": 4202575,
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "catchParameter": null,
                                        "block": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 23
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 23
                                        },
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "finallyKeyword": null,
                                    "finallyBlock": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 23
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 23
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 23
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { catch",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ 'try' expected - start: 17, end: 23
✖ The parser expected to find a '}' to match the '{' token here - start: 18, end: 23

```

