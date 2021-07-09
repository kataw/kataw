# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: /if
## Options

`````js
{}
`````
## Input

`````js
{( /if
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
                                "text": "/if",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 6
                            },
                            "flags": 1,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 6
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 6
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "{( /if",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 2, end: 6
✖ Expected a ')' to match the '(' token here - start: 3, end: 6

```

