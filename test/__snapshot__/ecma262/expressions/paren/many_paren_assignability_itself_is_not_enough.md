# Kataw parser test case

## Input

`````js
[((((((x = y))))))] = obj
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 7,
                                                            "end": 8
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 8,
                                                            "end": 10
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 10,
                                                            "end": 12
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6,
                                                        "end": 12
                                                    },
                                                    "flags": 6,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 13
                                                },
                                                "flags": 5,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 14
                                            },
                                            "flags": 4,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 15
                                        },
                                        "flags": 3,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 16
                                    },
                                    "flags": 2,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 17
                                },
                                "flags": 1,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 18
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "[((((((x = y))))))] = obj",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
[((((((x = y))))))] = obj;
```

### Diagnostics

```javascript
✔ No errors
```

