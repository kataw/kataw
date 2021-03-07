# Kataw parser test case

## Input

`````js
function a<X extends {}>(b: X): X {
    return b;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function a<X extends {}>(b: X): X {\n    return b;\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 10
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 25,
                                "end": 26
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 29
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 27,
                                "end": 30
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 25,
                            "end": 29
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 30
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "X",
                        "rawText": "X",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 33
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 31,
                    "end": 35
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 196712,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 48
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 49
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 49
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 51
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "X",
                                "rawText": "X",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 12
                            },
                            "constraint": {
                                "kind": 8422,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 22,
                                    "end": 23
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 20,
                                "end": 23
                            },
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 11,
                            "end": 23
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 11,
                    "end": 23
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 51
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 51
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

