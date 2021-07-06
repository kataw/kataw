# Kataw parser test case

## Input

`````js
{ yield = {}; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 11
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 9,
                                "end": 12
                            },
                            "flags": 0,
                            "transformFlags": 128,
                            "start": 1,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 13
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "{ yield = {}; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

{
  yield = {};
}
```

### Diagnostics

```javascript
✔ No errors
```

