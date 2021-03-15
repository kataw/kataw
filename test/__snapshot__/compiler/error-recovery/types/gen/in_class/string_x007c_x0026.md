# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class
> :: test: in class
> :: case: string | &
## Input

`````js
string | & class string | & { field: string | &}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "string | & class string | & { field: string | &}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "string",
                        "rawText": "string",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 6
                    },
                    "operator": "|",
                    "right": {
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
                        "operator": "&",
                        "right": {
                            "kind": 66099,
                            "name": {
                                "kind": 131102,
                                "text": "string",
                                "rawText": "string",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 16,
                                "end": 23
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 10,
                                "end": 10
                            },
                            "decorators": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 10,
                            "end": 23
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 23
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 23
                },
                "operator": "|",
                "right": {
                    "kind": 65563,
                    "left": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 25
                    },
                    "operator": "&",
                    "right": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196711,
                                        "text": "field",
                                        "rawText": "field",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 35
                                    },
                                    "right": {
                                        "kind": 65563,
                                        "left": {
                                            "kind": 196712,
                                            "text": "string",
                                            "rawText": "string",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 43
                                        },
                                        "operator": "|",
                                        "right": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 131322,
                                                "text": "",
                                                "flags": 3,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 45
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 131322,
                                                "text": "",
                                                "flags": 3,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 47
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 47
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 47
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 47
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 47
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 48
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 48
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 48
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 46,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 47,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

