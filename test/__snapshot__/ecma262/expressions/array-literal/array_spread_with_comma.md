# Kataw parser test case

## Input

`````js
[...(x), y]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 4
                            },
                            "argument": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 6
                                },
                                "flags": 4,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 7
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 7
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
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
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "[...(x), y]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
[...(x), y];
```

### Diagnostics

```javascript
✔ No errors
```

