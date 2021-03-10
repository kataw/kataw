# Kataw parser test case

## Input

`````js
function isString(x: any): x is string {
    return typeof x === 'string'
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function isString(x: any): x is string {\n    return typeof x === 'string'\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "isString",
                    "rawText": "isString",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 17
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 18,
                                "end": 19
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 20,
                                "end": 24
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 18,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 25
                },
                "type": {
                    "kind": 8426,
                    "asserts": false,
                    "parameterName": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "type": {
                        "kind": 4202702,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 31,
                        "end": 38
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 26,
                    "end": 38
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 65774,
                                        "operator": "typeof",
                                        "operand": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 58,
                                            "end": 60
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 60
                                    },
                                    "operator": "===",
                                    "right": {
                                        "kind": 4261583,
                                        "text": "string",
                                        "rawText": "string",
                                        "flags": 16777216,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 64,
                                        "end": 73
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 73
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 73
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 73
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 75
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 75
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 75
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
