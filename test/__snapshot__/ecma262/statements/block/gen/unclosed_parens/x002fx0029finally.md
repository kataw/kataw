# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: /)finally
## Options

`````js
{}
`````
## Input

`````js
{( /)finally
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
                            "kind": 121,
                            "expression": {
                                "kind": 371,
                                "text": "/)finally",
                                "rawText": "/)finally",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 12
                            },
                            "flags": 1,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 12
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "{( /)finally",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 2, end: 12
✖ Expected a ')' to match the '(' token here - start: 3, end: 12

```

