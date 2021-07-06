# Kataw parser test case

## Input

`````js
[(x())[y],] = z;
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
                                "kind": 130,
                                "member": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 3
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 4
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 1,
                                        "end": 5
                                    },
                                    "flags": 1,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 6
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 8
                                },
                                "flags": 536870944,
                                "transformFlags": 4,
                                "start": 1,
                                "end": 9
                            }
                        ],
                        "trailingComma": true,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 10
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "[(x())[y],] = z;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
[(x())[y],] = z;
```

### Diagnostics

```javascript
✔ No errors
```

