# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: /false//a
## Options

`````js
{}
`````
## Input

`````js
do[ /false//a
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
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
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 11
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 96,
                                    "transformFlags": 32,
                                    "start": 11,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 13
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 3,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 13
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 2,
                    "end": 13
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 13
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "do[ /false//a",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 12, end: 13

```

