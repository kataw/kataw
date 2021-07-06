# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: { /a/iui
## Options

`````js
{}
`````
## Input

`````js
{[ { /a/iui
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
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 4
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 2,
                                        "end": 4
                                    },
                                    {
                                        "kind": 371,
                                        "text": "/a/iui",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 11
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 11
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "{[ { /a/iui",
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
✖ Duplicate regular expression flag - start: 9, end: 10
✖ The parser expected to find a '}' to match the '{' token here - start: 5, end: 11

```

