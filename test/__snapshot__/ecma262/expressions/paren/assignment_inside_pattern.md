# Kataw parser test case

## Input

`````js
([target()[targetKey(a=b)]] = x);
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
                                            "text": "target",
                                            "rawText": "target",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 8
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 2,
                                        "end": 10
                                    },
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "targetKey",
                                            "rawText": "targetKey",
                                            "flags": 96,
                                            "transformFlags": 0,
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
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 21,
                                                        "end": 22
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 22,
                                                        "end": 23
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 23,
                                                        "end": 24
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 21,
                                                    "end": 24
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 11,
                                        "end": 25
                                    },
                                    "flags": 536870944,
                                    "transformFlags": 4,
                                    "start": 2,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 26
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 31
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 31
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "([target()[targetKey(a=b)]] = x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
([target()[targetKey(a = b)]] = x);
```

### Diagnostics

```javascript
✔ No errors
```

