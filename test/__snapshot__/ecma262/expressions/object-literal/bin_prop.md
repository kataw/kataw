# Kataw parser test case

## Input

`````js
x = {0b001001: y}
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 9,
                                    "rawText": "0b001001",
                                    "flags": 524384,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 13
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 16
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 5,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 524304,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 16
                    },
                    "flags": 524336,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 17
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "x = {0b001001: y}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
x = { 0b001001: y };
```

### Diagnostics

```javascript
✔ No errors
```

