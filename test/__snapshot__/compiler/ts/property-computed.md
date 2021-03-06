# Kataw parser test case

## Input

`````js
class C {
    [Symbol.iterator]: number;
    [Symbol.iterator]?: number;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C {\n    [Symbol.iterator]: number;\n    [Symbol.iterator]?: number;\n}",
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
                            "kind": 84,
                            "key": {
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
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 32,
                                "end": 39
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 9,
                            "end": 40
                        },
                        {
                            "kind": 84,
                            "key": {
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
                                        "start": 46,
                                        "end": 52
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "iterator",
                                        "rawText": "iterator",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 53,
                                        "end": 61
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 61,
                                    "period": {
                                        "kind": 254,
                                        "pos": 52,
                                        "end": 53
                                    }
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 131073,
                                "start": 40,
                                "end": 62
                            },
                            "isReadOnly": false,
                            "isOptional": true,
                            "exclamation": false,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 64,
                                "end": 71
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 40,
                            "end": 72
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 74
                },
                "decorators": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 74
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 74
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 74
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

