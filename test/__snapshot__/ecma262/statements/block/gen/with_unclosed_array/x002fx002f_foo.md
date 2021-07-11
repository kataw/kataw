# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: // foo
## Options

`````js
{}
`````
## Input

`````js
{[ // foo
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
                                "start": 2,
                                "end": 2
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 2
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 2
        }
    ],
    "isModule": false,
    "source": "{[ // foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 9

```

