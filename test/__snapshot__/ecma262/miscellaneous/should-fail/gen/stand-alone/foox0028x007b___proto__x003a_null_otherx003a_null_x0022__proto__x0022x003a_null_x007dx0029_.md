# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: foo({ __proto__: null, other: null, "__proto__": null });
## Options

`````js
{}
`````
## Input

`````js
foo({ __proto__: null, other: null, "__proto__": null });
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                    "start": 0,
                    "end": 3
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
                                            "start": 5,
                                            "end": 15
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 21
                                        },
                                        "flags": 36,
                                        "transformFlags": 128,
                                        "start": 5,
                                        "end": 21
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
                                            "start": 22,
                                            "end": 28
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 22,
                                        "end": 34
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
                                            "start": 35,
                                            "end": 47
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 48,
                                            "end": 53
                                        },
                                        "flags": 36,
                                        "transformFlags": 128,
                                        "start": 35,
                                        "end": 53
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 20,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 53
                            },
                            "flags": 52,
                            "transformFlags": 8,
                            "start": 4,
                            "end": 55
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 55
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 56
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "foo({ __proto__: null, other: null, \"__proto__\": null });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 55, end: 56

```

