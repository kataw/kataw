# Kataw parser test case

## Input

`````js
class x extends y {constructor(){    ({"foo": super}) => x    }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class x extends y {constructor(){    ({\"foo\": super}) => x    }}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 17
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 30
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 32
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 83976,
                                                "typeParameters": null,
                                                "parameters": {
                                                    "kind": 81929,
                                                    "elements": [
                                                        {
                                                            "kind": 16473,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 33554598,
                                                                "propertyList": {
                                                                    "kind": 33,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 16412,
                                                                            "left": {
                                                                                "kind": 4261583,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 39,
                                                                                "end": 44
                                                                            },
                                                                            "right": {
                                                                                "kind": 67175096,
                                                                                "member": {
                                                                                    "kind": 4260561,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 45,
                                                                                    "end": 51
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 196711,
                                                                                    "text": "",
                                                                                    "rawText": "",
                                                                                    "flags": 1,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 51,
                                                                                    "end": 51
                                                                                },
                                                                                "flags": 45,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 1,
                                                                                "end": 51
                                                                            },
                                                                            "accessModifier": null,
                                                                            "decorators": null,
                                                                            "flags": 1,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 39,
                                                                            "end": 51
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 1,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 39,
                                                                    "end": 51
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 38,
                                                                "end": 52
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
                                                            "start": 33,
                                                            "end": 53
                                                        }
                                                    ],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 53
                                                },
                                                "contents": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 58
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 58
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 58
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 63
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 63
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 19,
                        "end": 63
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 19,
                "end": 64
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Super must be followed by an argument list or member access",
            "start": 51,
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

