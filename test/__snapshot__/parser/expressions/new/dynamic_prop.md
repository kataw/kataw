# Kataw parser test case

## Input

`````js
x({[new A()]:y})
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 210,
                                                "newKeyword": {
                                                    "kind": 138477661,
                                                    "flags": 0,
                                                    "start": 4,
                                                    "end": 7
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "A",
                                                    "rawText": "A",
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 9
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 10,
                                                    "end": 10
                                                },
                                                "flags": 32,
                                                "start": 4,
                                                "end": 11
                                            },
                                            "flags": 32,
                                            "start": 3,
                                            "end": 12
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 3,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "x({[new A()]:y})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

