# Kataw parser test case

## Input

`````js
{ (x = {[yield]: 1}) => z }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 20,
                                "end": 23
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 4,
                                        "end": 6
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
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 16,
                                                        "end": 18
                                                    },
                                                    "right": {
                                                        "kind": 194,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 96,
                                                            "start": 9,
                                                            "end": 14
                                                        },
                                                        "flags": 32,
                                                        "start": 8,
                                                        "end": 15
                                                    },
                                                    "flags": 32,
                                                    "start": 8,
                                                    "end": 18
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 8,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 1,
                                    "end": 19
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 34,
                            "start": 1,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "{ (x = {[yield]: 1}) => z }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

