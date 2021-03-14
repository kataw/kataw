# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_async_arrow_head
> :: test: in async arrow head
> :: case: unknown): asserts value is
## Input

`````js
async ([ unknown): asserts value is , x: unknown): asserts value is ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async ([ unknown): asserts value is , x: unknown): asserts value is ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097292,
            "label": {
                "kind": 65590,
                "expressions": [
                    {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 33554437,
                                    "elementList": {
                                        "kind": 29,
                                        "elements": [
                                            {
                                                "kind": 4325406,
                                                "text": "unknown",
                                                "rawText": "unknown",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 16
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 16
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 16
                                },
                                "isOptional": false,
                                "type": null,
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 7,
                                "end": 35
                            }
                        ],
                        "type": {
                            "kind": 8426,
                            "asserts": true,
                            "parameterName": {
                                "kind": 196712,
                                "text": "value",
                                "rawText": "value",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 32
                            },
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196712,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 35
                                },
                                "typeArguments": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 35,
                                "end": 37
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 18,
                            "end": 35
                        },
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 35
                    },
                    {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 39
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 39
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "unknown",
                    "rawText": "unknown",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 48
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 48
            },
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 48
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "asserts",
                "rawText": "asserts",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 50,
                "end": 58
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 50,
            "end": 58
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "value",
                "rawText": "value",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 58,
                "end": 64
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 58,
            "end": 64
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "is",
                "rawText": "is",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 64,
                "end": 67
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 64,
            "end": 67
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 75,
                "end": 75
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 73,
            "end": 76
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 48,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 59,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 65,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 68,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 69,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 71,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

