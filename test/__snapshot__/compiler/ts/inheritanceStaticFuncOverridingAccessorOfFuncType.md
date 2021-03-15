# Kataw parser test case

## Input

`````js
class a {
    static get x(): () => string {
        return null;
    }
}

class b extends a {
    static x() {
        return "20";
    }
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class a {\n    static get x(): () => string {\n        return null;\n    }\n}\n\nclass b extends a {\n    static x() {\n        return \"20\";\n    }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "a",
                "rawText": "a",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 26
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 28
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4260512,
                                                "text": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 59,
                                                "end": 64
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 65
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 65
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 71
                            },
                            "decorators": null,
                            "type": {
                                "kind": 8287,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134226095,
                                    "parameterList": [],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 31,
                                    "end": 31
                                },
                                "returnType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 35,
                                    "end": 42
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 29,
                                "end": 42
                            },
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 71
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 71
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 9,
                "end": 73
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 73
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "b",
                "rawText": "b",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 80,
                "end": 82
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 90,
                    "end": 92
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 90,
                "end": 92
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 105,
                                "end": 107
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 108,
                                "end": 109
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4261583,
                                                "text": "20",
                                                "rawText": "20",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 126,
                                                "end": 131
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 111,
                                            "end": 132
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 111,
                                    "end": 132
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 109,
                                "end": 138
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 107,
                            "end": 138
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 94,
                        "end": 138
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 94,
                "end": 140
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 73,
            "end": 140
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
    "end": 140
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

