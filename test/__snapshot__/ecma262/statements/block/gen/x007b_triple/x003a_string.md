# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: : string
## Options

`````js
{}
`````
## Input

`````js
{ { { : string
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
                                        "statements": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 5
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 5
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 7,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 7,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "{ { { : string",
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
✖ The parser expected to find a '}' to match the '{' token here - start: 6, end: 7

```

