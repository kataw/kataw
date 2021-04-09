# Kataw parser test case

## Input

`````js
(...x = y) => x;

(...x = 10) => {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "autofix": 0,
                            "flags": 0,
                            "start": 1,
                            "end": 4
                        },
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 4,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 7,
                            "end": 9
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 9
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "autofix": 0,
                            "flags": 0,
                            "start": 19,
                            "end": 22
                        },
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 22,
                            "end": 23
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": 10,
                            "autofix": 0,
                            "flags": 768,
                            "start": 25,
                            "end": 28
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 19,
                        "end": 28
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 34,
                        "end": 34
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 32,
                    "end": 35
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 16,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "(...x = y) => x;\n\n(...x = 10) => {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 5,
            "end": 7
        },
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 23,
            "end": 25
        }
    ],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

