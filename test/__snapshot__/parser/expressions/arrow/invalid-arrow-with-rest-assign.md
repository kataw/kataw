# Kataw parser test case

## Input

`````js
({a, ...b = 0}) => {})
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
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 3
                                },
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "operatorToken": {
                                            "kind": 67174402,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 0,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 8,
                                        "end": 13
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 4,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 14
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
                        "start": 20,
                        "end": 20
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 21
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "({a, ...b = 0}) => {})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 15,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 21,
            "end": 22
        }
    ],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

