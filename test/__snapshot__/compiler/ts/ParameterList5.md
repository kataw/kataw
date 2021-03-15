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
                    "kind": 134226095,
                    "parameterList": [
                        {
                            "kind": 134226094,
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
                    "kind": 134226156,
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
                    "flags": 32768,
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
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
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

