# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: { /a/iui
## Options

`````js
{}
`````
## Input

`````js
{ { { { /a/iui
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
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 371,
                                                                "text": "/a/iui",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 7,
                                                                "end": 14
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 7,
                                                            "end": 14
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 7,
                                                    "end": 14
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 14
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 14
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 14
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 14
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 14
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "{ { { { /a/iui",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate regular expression flag - start: 12, end: 13
✖ The parser expected to find a '}' to match the '{' token here - start: 8, end: 14

```

