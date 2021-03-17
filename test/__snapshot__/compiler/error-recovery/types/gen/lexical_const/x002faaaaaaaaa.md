# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
> :: test: lexical const
> :: case: /aaaaaaaaa
## Input

`````js
const x: /aaaaaaaaa= {x:/aaaaaaaaa}:/aaaaaaaaa
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: /aaaaaaaaa= {x:/aaaaaaaaa}:/aaaaaaaaa",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196712,
                                "text": "",
                                "rawText": "",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "typeArguments": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 8
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 40,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 8
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 8
                    },
                    "operator": "/",
                    "right": {
                        "kind": 196712,
                        "text": "aaaaaaaaa",
                        "rawText": "aaaaaaaaa",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 19
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 19
                },
                "operator": "=",
                "right": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65721,
                                "left": {
                                    "kind": 196711,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 4260544,
                                    "text": "/aaaaaaaaa}:/aaaaaaaaa",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 46
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 46
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 46
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 46
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 46
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 8,
            "end": 46
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 37,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 38,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 39,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 40,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 41,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 42,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 43,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 44,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 45,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 24,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

