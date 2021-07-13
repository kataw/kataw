# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: foo({ __proto__: null, other: null, "__proto__": null });
## Options

`````js
{}
`````
## Input

`````js
{ foo({ __proto__: null, other: null, "__proto__": null }); }
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
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 5
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "__proto__",
                                                        "rawText": "__proto__",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 7,
                                                        "end": 17
                                                    },
                                                    "right": {
                                                        "kind": 138477575,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 23
                                                    },
                                                    "flags": 36,
                                                    "transformFlags": 128,
                                                    "start": 7,
                                                    "end": 23
                                                },
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "other",
                                                        "rawText": "other",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 24,
                                                        "end": 30
                                                    },
                                                    "right": {
                                                        "kind": 138477575,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 31,
                                                        "end": 36
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 24,
                                                    "end": 36
                                                },
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 201392131,
                                                        "text": "__proto__",
                                                        "rawText": "\"__proto__\"",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 37,
                                                        "end": 49
                                                    },
                                                    "right": {
                                                        "kind": 138477575,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 50,
                                                        "end": 55
                                                    },
                                                    "flags": 36,
                                                    "transformFlags": 128,
                                                    "start": 37,
                                                    "end": 55
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 20,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 55
                                        },
                                        "flags": 52,
                                        "transformFlags": 8,
                                        "start": 6,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 57
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 58
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 59
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 59
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "{ foo({ __proto__: null, other: null, \"__proto__\": null }); }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 57, end: 58

```

