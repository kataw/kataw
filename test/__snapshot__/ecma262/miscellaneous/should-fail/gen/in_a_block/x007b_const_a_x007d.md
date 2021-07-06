# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: { const a; }
## Options

`````js
{}
`````
## Input

`````js
{ { const a; } }
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
                                    "kind": 162,
                                    "lexicalKeyword": {
                                        "kind": 37757004,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 9
                                    },
                                    "binding": {
                                        "kind": 151,
                                        "bindingList": [
                                            {
                                                "kind": 190,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 9,
                                                    "end": 11
                                                },
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "transformFlags": 128,
                                                "start": 9,
                                                "end": 11
                                            }
                                        ],
                                        "flags": 16777232,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "flags": 33554448,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 12
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 14
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "{ { const a; } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in const declaration - start: 11, end: 12

```

