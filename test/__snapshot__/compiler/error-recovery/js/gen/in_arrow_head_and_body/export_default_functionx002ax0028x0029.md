# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_head_and_body
> :: test: in arrow head and body
> :: case: export default function*()
## Input

`````js
(export default function*()) => {x = {export default function*()}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(export default function*()) => {x = {export default function*()}}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 1
        },
        {
            "kind": 77,
            "declaration": {
                "kind": 788576,
                "name": null,
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 27
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 28
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 28
                },
                "typeParameters": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 384,
                "start": 15,
                "end": 28
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 1,
            "end": 28
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 65550,
                            "left": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 34
                            },
                            "operator": "=",
                            "right": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 196711,
                                            "text": "export",
                                            "rawText": "export",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 44
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "default",
                                            "rawText": "default",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 52
                                        },
                                        {
                                            "kind": 196711,
                                            "text": "function",
                                            "rawText": "function",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 52,
                                            "end": 61
                                        },
                                        {
                                            "kind": 17320034,
                                            "name": {
                                                "kind": 131322,
                                                "text": "",
                                                "flags": 3,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 62,
                                                "end": 62
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 63,
                                                "end": 64
                                            },
                                            "isSetter": false,
                                            "isGetter": false,
                                            "contents": null,
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 62,
                                            "end": 64
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 64
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 65
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 65
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 65
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 65
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 31,
            "end": 66
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 1,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 45,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 53,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 61,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 62,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

