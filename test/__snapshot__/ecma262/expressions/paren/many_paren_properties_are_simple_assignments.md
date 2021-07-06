# Kataw parser test case

## Input

`````js
[((((((x.y))))))] = obj
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
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 7,
                                                            "end": 8
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 9,
                                                            "end": 10
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 6,
                                                        "end": 10
                                                    },
                                                    "flags": 6,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 11
                                                },
                                                "flags": 5,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 12
                                            },
                                            "flags": 4,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 13
                                        },
                                        "flags": 3,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 14
                                    },
                                    "flags": 2,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 15
                                },
                                "flags": 1,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 16
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 23
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "[((((((x.y))))))] = obj",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

[((((((x.y))))))] = obj;
```

### Diagnostics

```javascript
✔ No errors
```

