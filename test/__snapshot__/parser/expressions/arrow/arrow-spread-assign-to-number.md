# Kataw parser test case

## Input

`````js
(a, ...x = 10) => x;
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
                    [
                        {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "autofix": 0,
                                "flags": 0,
                                "start": 3,
                                "end": 7
                            },
                            "binding": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 7,
                                "end": 8
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 81921,
                                "value": 10,
                                "autofix": 0,
                                "flags": 768,
                                "start": 10,
                                "end": 13
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 3,
                            "end": 13
                        }
                    ]
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "(a, ...x = 10) => x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 8,
            "end": 10
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

