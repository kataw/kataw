# Kataw parser test case

## Input

`````js
let f = () => { const [...await f] = []; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 162,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "f",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 201,
                                                            "elementList": {
                                                                "kind": 202,
                                                                "elements": [
                                                                    {
                                                                        "kind": 244,
                                                                        "ellipsisToken": {
                                                                            "kind": 524302,
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 23,
                                                                            "end": 26
                                                                        },
                                                                        "binding": {
                                                                            "kind": 81921,
                                                                            "value": "await",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 26,
                                                                            "end": 31
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 23,
                                                                        "end": 31
                                                                    },
                                                                    {
                                                                        "kind": 244,
                                                                        "ellipsisToken": null,
                                                                        "binding": {
                                                                            "kind": 81921,
                                                                            "value": "f",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 31,
                                                                            "end": 33
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 31,
                                                                        "end": 33
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 23,
                                                                "end": 33
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 21,
                                                            "end": 34
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 38,
                                                                "end": 38
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 36,
                                                            "end": 39
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 21,
                                                        "end": 39
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 160,
                                                "start": 21,
                                                "end": 39
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 15,
                                            "end": 40
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 15,
                                    "end": 40
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 13,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 42
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 42
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 42
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "let f = () => { const [...await f] = []; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 31,
            "end": 33
        }
    ],
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

