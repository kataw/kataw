# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_function_param_with_block
> :: test: in function param with block
> :: case: { [index: number]:
## Input

`````js
function ( { [index: number]: ) {{ [index: number]:}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function ( { [index: number]: ) {{ [index: number]:}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 8
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 65591,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "index",
                                                "rawText": "index",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 19
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 131073,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "number",
                                                "rawText": "number",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 20,
                                                "end": 27
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 20,
                                            "end": 27
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 12,
                                        "end": 27
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 1,
                                "symbol": null,
                                "start": 12,
                                "end": 27
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 10,
                            "end": 27
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 10,
                        "end": 27
                    }
                ],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 28
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
            "transformFlags": 256,
            "start": 0,
            "end": 28
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [
                                {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 98822,
                                        "elementList": {
                                            "kind": 65605,
                                            "elements": [
                                                {
                                                    "kind": 196712,
                                                    "text": "index",
                                                    "rawText": "index",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 36,
                                                    "end": 41
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 41
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 41
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 41
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 41
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 41
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 41
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 31,
            "end": 41
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "number",
                "rawText": "number",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 42,
                "end": 49
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 42,
            "end": 49
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
            "message": "']' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 50,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 51,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

