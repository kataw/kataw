# Kataw parser test case

## Input

`````js
([target()[targetKey(a=b)]] = x);
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
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 130,
                                    "member": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "original": "target",
                                            "text": "target",
                                            "rawText": "target",
                                            "flags": 96,
                                            "start": 2,
                                            "end": 8
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 10
                                    },
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "original": "targetKey",
                                            "text": "targetKey",
                                            "rawText": "targetKey",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 20
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "original": "a",
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 21,
                                                        "end": 22
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 22,
                                                        "end": 23
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "original": "b",
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 23,
                                                        "end": 24
                                                    },
                                                    "flags": 32,
                                                    "start": 21,
                                                    "end": 24
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 26
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 27,
                        "end": 29
                    },
                    "right": {
                        "kind": 134299649,
                        "original": "x",
                        "text": "x",
                        "rawText": " x",
                        "flags": 96,
                        "start": 29,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 31
                },
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "([target()[targetKey(a=b)]] = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
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

