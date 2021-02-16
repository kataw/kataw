# Kataw parser test case

## Input

`````js
function* g() {   [...{ x = yield }] = y   }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function* g() {   [...{ x = yield }] = y   }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 788576,
                "name": {
                    "kind": 131102,
                    "text": "g",
                    "rawText": "g",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 11
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 12,
                    "end": 13
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
                                        "kind": 67207686,
                                        "elementList": {
                                            "kind": 65605,
                                            "elements": [
                                                {
                                                    "kind": 65740,
                                                    "argument": {
                                                        "kind": 67224232,
                                                        "propertyList": {
                                                            "kind": 65722,
                                                            "properties": [
                                                                {
                                                                    "kind": 61,
                                                                    "left": {
                                                                        "kind": 196712,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 23,
                                                                        "end": 25
                                                                    },
                                                                    "isOptional": false,
                                                                    "exclamation": false,
                                                                    "right": {
                                                                        "kind": 65785,
                                                                        "delegate": false,
                                                                        "expression": null,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 16393,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 27,
                                                                        "end": 33
                                                                    },
                                                                    "accessModifier": null,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 23,
                                                                    "end": 33
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 23,
                                                            "end": 33
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 22,
                                                        "end": 35
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 19,
                                                    "end": 35
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 19,
                                            "end": 35
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 15,
                                        "end": 36
                                    },
                                    "operator": "=",
                                    "right": {
                                        "kind": 196712,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 15,
                                    "end": 40
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 15,
                                "end": 40
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 15,
                        "end": 40
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 13,
                    "end": 44
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 384,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 44
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 44
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

