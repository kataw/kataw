# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
function a(...[a, b]) { }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "function a(...[a, b]) { }",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "a",
                    "rawText": "a",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 10
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": true,
                            "binding": {
                                "kind": 33554437,
                                "elementList": {
                                    "kind": 29,
                                    "elements": [
                                        {
                                            "kind": 134217756,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 15,
                                                "end": 16
                                            },
                                            "right": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 15,
                                            "end": 16
                                        },
                                        {
                                            "kind": 134217756,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 17,
                                                "end": 19
                                            },
                                            "right": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 17,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 15,
                                    "end": 19
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 14,
                                "end": 20
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 4097,
                            "start": 11,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 21
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 25
                },
                "typeParameters": null,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 25
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 25
    },
    "jsx": true,
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

