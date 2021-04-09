# Kataw parser test case

## Input

`````js
({ident: [foo, bar]/x}) => x
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
                                    "kind": 219,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 81921,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 10,
                                                        "end": 13
                                                    },
                                                    {
                                                        "kind": 81921,
                                                        "value": "bar",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 14,
                                                        "end": 18
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 10,
                                                "end": 18
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 8,
                                            "end": 19
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 2,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "ident",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 2,
                                        "end": 7
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 21
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 22
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 26,
                    "end": 28
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 28
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "({ident: [foo, bar]/x}) => x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 23,
            "end": 26
        }
    ],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

