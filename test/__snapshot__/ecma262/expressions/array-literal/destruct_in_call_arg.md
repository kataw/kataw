# Kataw parser test case

## Input

`````js
[y<t]({}=y)
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
                "kind": 131,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 2
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 3
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "t",
                                    "rawText": "t",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 4
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 1,
                                "end": 4
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 7
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 6,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 10
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 6,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 10
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "[y<t]({}=y)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
[y  < t]({} = y);
```

### Diagnostics

```javascript
✔ No errors
```

