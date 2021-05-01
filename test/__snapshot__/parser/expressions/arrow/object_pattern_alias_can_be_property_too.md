# Kataw parser test case

## Input

`````js
({a, a:a, a:a=a, [a]:{a}, a:some_call()[a], a:this.a} = 0);
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 3
                                },
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "asyncKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 6
                                    },
                                    "flags": 32,
                                    "start": 4,
                                    "end": 8
                                },
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "asyncKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 15
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 15
                                },
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "asyncKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 23
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 22,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 21,
                                        "end": 24
                                    },
                                    "right": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "start": 16,
                                    "end": 24
                                },
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "asyncKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "some_call",
                                                "rawText": "some_call",
                                                "flags": 96,
                                                "start": 28,
                                                "end": 37
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 38,
                                                "end": 38
                                            },
                                            "flags": 32,
                                            "start": 25,
                                            "end": 39
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "start": 25,
                                        "end": 42
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "start": 25,
                                    "end": 42
                                },
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "asyncKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 135,
                                            "flags": 96,
                                            "start": 46,
                                            "end": 50
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 51,
                                            "end": 52
                                        },
                                        "flags": 32,
                                        "start": 43,
                                        "end": 52
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 43,
                                    "end": 52
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 52
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 53
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 53,
                        "end": 55
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 55,
                        "end": 57
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 57
                },
                "flags": 32,
                "start": 0,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "({a, a:a, a:a=a, [a]:{a}, a:some_call()[a], a:this.a} = 0);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
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

