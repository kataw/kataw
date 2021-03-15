# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_lhs
> :: test: in lhs
> :: case: interface Generic<T> {
## Input

`````js
 function (x:interface Generic<T> { = interface Generic<T> {) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": " function (x:interface Generic<T> { = interface Generic<T> {) {}",
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
                "start": 9,
                "end": 9
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
                            "start": 11,
                            "end": 12
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "interface",
                                "rawText": "interface",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 22
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 13,
                            "end": 30
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 11,
                        "end": 22
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "Generic",
                            "rawText": "Generic",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 22,
                            "end": 30
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
                        "start": 22,
                        "end": 30
                    }
                ],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 31
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65550,
                                "left": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 32
                                    },
                                    "operator": ">",
                                    "right": {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 35
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 35
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 196712,
                                    "text": "interface",
                                    "rawText": "interface",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 47
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 47
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 47
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "Generic",
                                        "rawText": "Generic",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 47,
                                        "end": 55
                                    },
                                    "operator": "<",
                                    "right": {
                                        "kind": 196712,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 56,
                                        "end": 57
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 57
                                },
                                "operator": ">",
                                "right": {
                                    "kind": 98984,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 60,
                                        "end": 60
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 60
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 60
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 60
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 60
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 60
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 60
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
                "start": 63,
                "end": 63
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 61,
            "end": 64
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 60,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

