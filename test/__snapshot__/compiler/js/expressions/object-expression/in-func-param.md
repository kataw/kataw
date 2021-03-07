# Kataw parser test case

## Input

`````js
function test({...{}}) {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function test({...{}}) {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "test",
                    "rawText": "test",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 13
                },
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
                                            "kind": 32,
                                            "ellipsis": true,
                                            "key": {
                                                "kind": 196712,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 18,
                                                "end": 18
                                            },
                                            "value": {
                                                "kind": 134217756,
                                                "ellipsis": false,
                                                "left": {
                                                    "kind": 33554598,
                                                    "propertyList": {
                                                        "kind": 33,
                                                        "properties": [],
                                                        "multiline": false,
                                                        "trailingComma": false,
                                                        "transformFlags": 1025,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "start": 19,
                                                        "end": 19
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 18,
                                                    "end": 20
                                                },
                                                "right": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 15,
                                            "end": 20
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 15,
                                    "end": 20
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 14,
                                "end": 21
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
                            "start": 14,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 22
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 25
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
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
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 18,
            "length": 0
        }
    ],
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

