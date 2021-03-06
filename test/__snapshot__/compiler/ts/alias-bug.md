# Kataw parser test case

## Input

`````js
function use() {
  var p1: provide.Provide;
  var p2: foo.Provide;
  var p3:booz.bar;
  var p22 = new provide.Provide();
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function use() {\n  var p1: provide.Provide;\n  var p2: foo.Provide;\n  var p3:booz.bar;\n  var p22 = new provide.Provide();\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "use",
                    "rawText": "use",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 12
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 14
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097397,
                                "declarationList": {
                                    "kind": 244,
                                    "declarations": [
                                        {
                                            "kind": 243,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "p1",
                                                "rawText": "p1",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 22,
                                                "end": 25
                                            },
                                            "exclamation": false,
                                            "type": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 8383,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "provide",
                                                        "rawText": "provide",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 34
                                                    },
                                                    "right": {
                                                        "kind": 196711,
                                                        "text": "Provide",
                                                        "rawText": "Provide",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 35,
                                                        "end": 42
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 26,
                                                    "end": 42
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 26,
                                                "end": 43
                                            },
                                            "initializer": null,
                                            "flags": 22,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 0,
                                            "end": 42
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 42
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 43
                            },
                            {
                                "kind": 2097397,
                                "declarationList": {
                                    "kind": 244,
                                    "declarations": [
                                        {
                                            "kind": 243,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "p2",
                                                "rawText": "p2",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 49,
                                                "end": 52
                                            },
                                            "exclamation": false,
                                            "type": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 8383,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 53,
                                                        "end": 57
                                                    },
                                                    "right": {
                                                        "kind": 196711,
                                                        "text": "Provide",
                                                        "rawText": "Provide",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 58,
                                                        "end": 65
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 53,
                                                    "end": 65
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 53,
                                                "end": 66
                                            },
                                            "initializer": null,
                                            "flags": 49,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 0,
                                            "end": 65
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 65
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 66
                            },
                            {
                                "kind": 2097397,
                                "declarationList": {
                                    "kind": 244,
                                    "declarations": [
                                        {
                                            "kind": 243,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "p3",
                                                "rawText": "p3",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 72,
                                                "end": 75
                                            },
                                            "exclamation": false,
                                            "type": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 8383,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "booz",
                                                        "rawText": "booz",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 76,
                                                        "end": 80
                                                    },
                                                    "right": {
                                                        "kind": 196711,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 81,
                                                        "end": 84
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 76,
                                                    "end": 84
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 76,
                                                "end": 85
                                            },
                                            "initializer": null,
                                            "flags": 72,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 0,
                                            "end": 84
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 72,
                                    "end": 84
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 85
                            },
                            {
                                "kind": 2097397,
                                "declarationList": {
                                    "kind": 244,
                                    "declarations": [
                                        {
                                            "kind": 243,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "p22",
                                                "rawText": "p22",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 91,
                                                "end": 95
                                            },
                                            "exclamation": false,
                                            "type": null,
                                            "initializer": {
                                                "kind": 66204,
                                                "expression": {
                                                    "kind": 66232,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "provide",
                                                        "rawText": "provide",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 101,
                                                        "end": 109
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "Provide",
                                                        "rawText": "Provide",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 110,
                                                        "end": 117
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 109,
                                                    "end": 117,
                                                    "period": {
                                                        "kind": 254,
                                                        "pos": 109,
                                                        "end": 110
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 118,
                                                    "end": 118
                                                },
                                                "flags": 97,
                                                "intersects": false,
                                                "transformFlags": 32,
                                                "start": 0,
                                                "end": 119
                                            },
                                            "flags": 91,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 0,
                                            "end": 119
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 91,
                                    "end": 119
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 85,
                                "end": 120
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 120
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 122
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 122
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 122
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 122
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

