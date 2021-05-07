# Kataw parser test case

## Input

`````js
({333: y.z} = a) => b
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 16,
                    "end": 19
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 333,
                                            "rawText": "333",
                                            "flags": 96,
                                            "start": 2,
                                            "end": 5
                                        },
                                        "right": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 6,
                                                "end": 8
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "flags": 32,
                                            "start": 2,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 2,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 11,
                            "end": 13
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 15
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "flags": 34,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "({333: y.z} = a) => b",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 16, end: 19

```

