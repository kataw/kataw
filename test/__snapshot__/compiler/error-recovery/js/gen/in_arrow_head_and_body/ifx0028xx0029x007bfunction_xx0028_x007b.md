# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_head_and_body
> :: test: in arrow head and body
> :: case: if(x){function x( {
## Input

`````js
(if(x){function x( {) => {x = {if(x){function x( {}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(if(x){function x( {) => {x = {if(x){function x( {}}",
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
            "kind": 2097257,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 15,
                                "end": 17
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
                                                "properties": [],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 20,
                                                "end": 20
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 18,
                                            "end": 20
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
                                        "start": 18,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 21
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
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
                                                                "start": 26,
                                                                "end": 27
                                                            },
                                                            "operator": "=",
                                                            "right": {
                                                                "kind": 98984,
                                                                "propertyList": {
                                                                    "kind": 65722,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 16844946,
                                                                            "name": {
                                                                                "kind": 196711,
                                                                                "text": "if",
                                                                                "rawText": "if",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 31,
                                                                                "end": 33
                                                                            },
                                                                            "formalParameters": {
                                                                                "kind": 90,
                                                                                "formalParameterList": [
                                                                                    {
                                                                                        "kind": 16473,
                                                                                        "ellipsis": false,
                                                                                        "binding": {
                                                                                            "kind": 131102,
                                                                                            "text": "x",
                                                                                            "rawText": "x",
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 1025,
                                                                                            "start": 34,
                                                                                            "end": 35
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
                                                                                        "start": 34,
                                                                                        "end": 35
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 34,
                                                                                "end": 36
                                                                            },
                                                                            "isSetter": false,
                                                                            "isGetter": false,
                                                                            "contents": {
                                                                                "kind": 91,
                                                                                "functionStatementList": {
                                                                                    "kind": 94,
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 264284,
                                                                                            "name": {
                                                                                                "kind": 131102,
                                                                                                "text": "x",
                                                                                                "rawText": "x",
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 1025,
                                                                                                "start": 45,
                                                                                                "end": 47
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
                                                                                                                "properties": [],
                                                                                                                "multiline": false,
                                                                                                                "trailingComma": false,
                                                                                                                "transformFlags": 1025,
                                                                                                                "flags": 0,
                                                                                                                "symbol": null,
                                                                                                                "start": 50,
                                                                                                                "end": 50
                                                                                                            },
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 1025,
                                                                                                            "start": 48,
                                                                                                            "end": 51
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
                                                                                                        "start": 48,
                                                                                                        "end": 51
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 1,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 48,
                                                                                                "end": 52
                                                                                            },
                                                                                            "type": null,
                                                                                            "contents": null,
                                                                                            "typeParameters": null,
                                                                                            "flags": 1,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 2097152,
                                                                                            "start": 37,
                                                                                            "end": 51
                                                                                        }
                                                                                    ],
                                                                                    "multiline": false,
                                                                                    "flags": 1,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 37,
                                                                                    "end": 51
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 36,
                                                                                "end": 52
                                                                            },
                                                                            "decorators": null,
                                                                            "type": null,
                                                                            "accessModifier": null,
                                                                            "typeParameters": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 33,
                                                                            "end": 52
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 31,
                                                                    "end": 52
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 29,
                                                                "end": 52
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 26,
                                                            "end": 52
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 52
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 52
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 52
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 52
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 52
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 256,
                            "start": 7,
                            "end": 52
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 52
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 52
            },
            "alternate": null,
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1,
            "end": 52
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
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
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

