# Kataw parser test case

## Input

`````js
({...{b: 0}[x]} = {});
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
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
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "original": "0",
                                                            "rawText": " 0",
                                                            "flags": 96,
                                                            "start": 8,
                                                            "end": 10
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "original": "b",
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 6,
                                                            "end": 7
                                                        },
                                                        "flags": 32,
                                                        "start": 6,
                                                        "end": 10
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 6,
                                                "end": 10
                                            },
                                            "flags": 32,
                                            "start": 5,
                                            "end": 11
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "original": "x",
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 14
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 14
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 14
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 15,
                        "end": 17
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 19,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 17,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "({...{b: 0}[x]} = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 15, end: 17

```

