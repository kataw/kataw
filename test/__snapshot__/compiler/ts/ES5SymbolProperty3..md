# Kataw parser test case

## Input

`````js
class C {
    [Symbol.iterator]() { }
}

(new C)[Symbol.iterator]
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C {\n    [Symbol.iterator]() { }\n}\n\n(new C)[Symbol.iterator]",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
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
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 65591,
                                    "expression": {
                                        "kind": 66232,
                                        "member": {
                                            "kind": 196712,
                                            "text": "Symbol",
                                            "rawText": "Symbol",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 21
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "iterator",
                                            "rawText": "iterator",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 30
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 30,
                                        "period": {
                                            "kind": 254,
                                            "pos": 21,
                                            "end": 22
                                        }
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 131073,
                                    "start": 9,
                                    "end": 31
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 33
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 37
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 37
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 37
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 39
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 39
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66116,
                    "member": {
                        "kind": 66224,
                        "expression": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "C",
                                "rawText": "C",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 47
                            },
                            "typeArguments": null,
                            "argumentList": null,
                            "flags": 42,
                            "intersects": false,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 47
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 48
                    },
                    "expression": {
                        "kind": 66232,
                        "member": {
                            "kind": 196712,
                            "text": "Symbol",
                            "rawText": "Symbol",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 55
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "iterator",
                            "rawText": "iterator",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 64
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 55,
                        "end": 64,
                        "period": {
                            "kind": 254,
                            "pos": 55,
                            "end": 56
                        }
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 65
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 39,
                "end": 65
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 65
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 65
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

