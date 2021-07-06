# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: : string
## Options

`````js
{}
`````
## Input

`````js
{[ : string
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
                        "transformFlags": 0,
                        "start": 1,
                        "end": 2
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 4,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "{[ : string",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 4

```

