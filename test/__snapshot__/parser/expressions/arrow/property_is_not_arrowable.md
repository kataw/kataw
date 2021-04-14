# Kataw parser test case

## Input

`````js
({a:b[0]}) => x
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
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 10,
                    "end": 13
                },
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
                                        "kind": 130,
                                        "member": {
                                            "kind": 81921,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 768,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 8
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 8
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 9
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "({a:b[0]}) => x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 10,
            "end": 13
        }
    ],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

