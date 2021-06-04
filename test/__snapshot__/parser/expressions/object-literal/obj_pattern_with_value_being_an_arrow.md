# Kataw parser test case

## Input

`````js
({a: b => []} = [2])
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "right": {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 4,
                                            "end": 6
                                        },
                                        "asyncKeyword": null,
                                        "returnType": null,
                                        "contents": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 11,
                                                "end": 11
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 12
                                        },
                                        "flags": 32,
                                        "start": 4,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 12
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 12
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 13,
                        "end": 15
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 18
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 17,
                            "end": 18
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 19
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "({a: b => []} = [2])",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 1, end: 15

```

