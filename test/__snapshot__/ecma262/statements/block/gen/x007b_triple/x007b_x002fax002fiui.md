# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_triple
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
                                                                "kind": 221,
                                                                "text": "/a/iui",
                                                                "flags": 96,
                                                                "start": 7,
                                                                "end": 14
                                                            },
                                                            "flags": 16,
                                                            "start": 7,
                                                            "end": 14
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 7,
                                                    "end": 14
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 14
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 14
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 14
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 1,
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
        }
    ],
    "isModule": false,
    "source": "{ { { { /a/iui",
    "fileName": "__root__",
    "flags": 0,
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

