# Kataw parser test case

## Input

`````js
({ident: {x:y}**x})
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
                                    "text": "ident",
                                    "rawText": "ident",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 7
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
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
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 10,
                                                    "end": 13
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 8,
                                        "end": 14
                                    },
                                    "operatorToken": {
                                        "kind": 35897,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "flags": 48,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 17
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 18
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "({ident: {x:y}**x})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

({ident: {x: y} ** x});
```

### Diagnostics

```javascript
✔ No errors
```

