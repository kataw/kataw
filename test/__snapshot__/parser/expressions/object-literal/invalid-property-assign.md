# Kataw parser test case

## Input

`````js
({ src: ([dest]) } = obj)
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
                                        "text": "src",
                                        "rawText": "src",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 6
                                    },
                                    "right": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "dest",
                                                        "rawText": "dest",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 14
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 10,
                                                "end": 14
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 16
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "start": 20,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 24
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "({ src: ([dest]) } = obj)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 1, end: 20

```

