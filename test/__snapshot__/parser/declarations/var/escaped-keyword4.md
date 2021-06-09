# Kataw parser test case

## Input

`````js
var y = { \u0064ebugger: x } = { debugger: 42 };
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
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
                                                "text": "debugger",
                                                "rawText": "\\u0064ebugger",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 23
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "flags": 16416,
                                            "start": 9,
                                            "end": 26
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16400,
                                    "start": 9,
                                    "end": 26
                                },
                                "flags": 16432,
                                "start": 7,
                                "end": 28
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 28,
                                "end": 30
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "debugger",
                                                "rawText": "debugger",
                                                "flags": 96,
                                                "start": 32,
                                                "end": 41
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "start": 42,
                                                "end": 45
                                            },
                                            "flags": 32,
                                            "start": 32,
                                            "end": 45
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 32,
                                    "end": 45
                                },
                                "flags": 48,
                                "start": 30,
                                "end": 47
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 47
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 47
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "var y = { \\u0064ebugger: x } = { debugger: 42 };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

var y = { debugger: x } = { debugger: 42 };
```

### Diagnostics

```javascript
✔ No errors
```

