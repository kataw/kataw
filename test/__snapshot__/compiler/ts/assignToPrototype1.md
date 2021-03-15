# Kataw parser test case

## Input

`````js
declare class Point {
  add(dx: number, dy: number): void;
}

Point.prototype.add = function(dx, dy) {
};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare class Point {\n  add(dx: number, dy: number): void;\n}\n\nPoint.prototype.add = function(dx, dy) {\n};",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Point",
                "rawText": "Point",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 13,
                "end": 19
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
                                "kind": 196711,
                                "text": "add",
                                "rawText": "add",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 27
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "dx",
                                            "rawText": "dx",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 31,
                                            "end": 38
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 28,
                                        "end": 38
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "dy",
                                            "rawText": "dy",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 39,
                                            "end": 42
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 43,
                                            "end": 50
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 39,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 51
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": {
                                "kind": 4202742,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 52,
                                "end": 57
                            },
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 58
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 21,
                        "end": 58
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 21,
                "end": 60
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 1,
            "start": 7,
            "end": 60
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67175096,
                    "member": {
                        "kind": 67175096,
                        "member": {
                            "kind": 196712,
                            "text": "Point",
                            "rawText": "Point",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 67
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "prototype",
                            "rawText": "prototype",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 77
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 67,
                        "end": 77,
                        "period": {
                            "kind": 255,
                            "pos": 67,
                            "end": 68
                        }
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "add",
                        "rawText": "add",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 78,
                        "end": 81
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 81,
                    "period": {
                        "kind": 255,
                        "pos": 77,
                        "end": 78
                    }
                },
                "operator": "=",
                "right": {
                    "kind": 8456285,
                    "name": null,
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 131102,
                                    "text": "dx",
                                    "rawText": "dx",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 93,
                                    "end": 95
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
                                "start": 93,
                                "end": 95
                            },
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 131102,
                                    "text": "dy",
                                    "rawText": "dy",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 96,
                                    "end": 99
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
                                "start": 96,
                                "end": 99
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 93,
                        "end": 100
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [],
                            "multiline": true,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 102,
                            "end": 102
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 100,
                        "end": 104
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 104
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 60,
                "end": 104
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 60,
            "end": 105
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 105
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

