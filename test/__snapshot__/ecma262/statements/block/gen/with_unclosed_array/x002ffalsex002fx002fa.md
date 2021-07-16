# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: /false//a
## Options

`````js
{}
`````
## Input

`````js
{[ /false//a
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
                                        "kind": 198,
                                        "left": {
                                            "kind": 371,
                                            "text": "/false/",
                                            "rawText": "/false/",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 10
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 2,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 12
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
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
    "source": "{[ /false//a",
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
✖ ',' expected - start: 11, end: 12

```

