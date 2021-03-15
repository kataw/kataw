# Kataw parser test case

## Input

`````js
function*foo(a = yield) {
}

function foo(a) {
    if (a === void 0) { a = yield; }
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function*foo(a = yield) {\n}\n\nfunction foo(a) {\n    if (a === void 0) { a = yield; }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 13,
                            "end": 14
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": {
                            "kind": 196712,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 22
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 13,
                        "end": 22
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 23
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": true,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 25
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 23,
                "end": 27
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 384,
            "start": 0,
            "end": 27
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 37,
                "end": 41
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 42,
                            "end": 43
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 42,
                        "end": 43
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 42,
                "end": 44
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097257,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 56
                                },
                                "operator": "===",
                                "right": {
                                    "kind": 65774,
                                    "operator": "void",
                                    "operand": {
                                        "kind": 4261540,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 65,
                                        "end": 67
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 67
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 67
                            },
                            "consequent": {
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
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 70,
                                                    "end": 72
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 74,
                                                    "end": 80
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 70,
                                                "end": 80
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 70,
                                            "end": 81
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 81
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 83
                            },
                            "alternate": null,
                            "isWebCompat": true,
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 83
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 83
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 44,
                "end": 85
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 27,
            "end": 85
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 85
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

