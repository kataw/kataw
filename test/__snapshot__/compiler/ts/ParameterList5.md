# Kataw parser test case

## Input

`````js
function A(): (public B) => C {
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function A(): (public B) => C {\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 10
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "type": {
                    "kind": 8287,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [
                            {
                                "kind": 8366,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 131102,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 21,
                                    "end": 23
                                },
                                "isOptional": false,
                                "type": null,
                                "initializer": null,
                                "accessModifier": {
                                    "kind": 4194494,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 15,
                                    "end": 21
                                },
                                "isReadOnly": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 15,
                                "end": 23
                            }
                        ],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 15,
                        "end": 23
                    },
                    "returnType": {
                        "kind": 8428,
                        "typeName": {
                            "kind": 196711,
                            "text": "C",
                            "rawText": "C",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 29
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 27,
                        "end": 31
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 13,
                    "end": 29
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 33
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 33
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 33
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

