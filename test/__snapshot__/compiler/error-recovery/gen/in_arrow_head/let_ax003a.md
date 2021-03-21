# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/gen/in_arrow_head
> :: test: in arrow head
> :: case: let a:
## Input

`````js
([ let a: ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ let a: ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 16473,
                    "ellipsis": false,
                    "binding": {
                        "kind": 98822,
                        "elementList": {
                            "kind": 65605,
                            "elements": [
                                {
                                    "kind": 196712,
                                    "text": "let",
                                    "rawText": "let",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 6
                                },
                                {
                                    "kind": 196712,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 8
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 8
                    },
                    "isOptional": false,
                    "type": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 9
                        },
                        "typeArguments": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 9,
                        "end": 11
                    },
                    "initializer": null,
                    "decorators": null,
                    "accessModifier": null,
                    "isReadOnly": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 9
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 9
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
                "start": 17,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 15,
            "end": 18
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 13,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

