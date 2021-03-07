# Kataw parser test case

## Input

`````js
(function({x, ...y}) { })
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(function({x, ...y}) { })",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 8456285,
                        "name": null,
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [
                                {
                                    "kind": 89,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 33554598,
                                        "propertyList": {
                                            "kind": 33,
                                            "properties": [
                                                {
                                                    "kind": 203,
                                                    "ellipsis": false,
                                                    "left": {
                                                        "kind": 131102,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 11,
                                                        "end": 12
                                                    },
                                                    "right": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1024,
                                                    "start": 11,
                                                    "end": 12
                                                },
                                                {
                                                    "kind": 203,
                                                    "ellipsis": true,
                                                    "left": {
                                                        "kind": 131102,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 13,
                                                        "end": 18
                                                    },
                                                    "right": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1024,
                                                    "start": 13,
                                                    "end": 18
                                                }
                                            ],
                                            "multiline": false,
                                            "trailingComma": false,
                                            "transformFlags": 1025,
                                            "flags": 0,
                                            "intersects": false,
                                            "start": 11,
                                            "end": 18
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 10,
                                        "end": 19
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
                                    "start": 10,
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 20
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 22
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 24
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 24
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 25
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 25
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 25
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

