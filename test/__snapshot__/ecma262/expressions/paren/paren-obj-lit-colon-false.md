# Kataw parser test case

## Input

`````js
({x: false});
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 3
                                },
                                "right": {
                                    "kind": 205586437,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 10
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 10
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 10
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 11
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "({x: false});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
({ x: false });
```

### Diagnostics

```javascript
✔ No errors
```

