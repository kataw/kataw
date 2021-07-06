# Kataw parser test case

## Input

`````js
({[x]: 10, y: 20});
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
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 10,
                                    "rawText": "10",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 9
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 9
                            },
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 20,
                                    "rawText": "20",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 16
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 10,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 16
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 17
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "({[x]: 10, y: 20});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

({[x]: 10, y: 20});
```

### Diagnostics

```javascript
✔ No errors
```

