# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
{[ false
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
                                        "kind": 205586437,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 8
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "{[ false",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 3, end: 8

```

