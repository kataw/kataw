# Kataw parser test case

## Input

`````js
wrap({'a':b, 'c':d});
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
                    "kind": 134299649,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "flags": 4194336,
                                        "transformFlags": 128,
                                        "start": 6,
                                        "end": 11
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "c",
                                            "rawText": "'c'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "flags": 4194336,
                                        "transformFlags": 128,
                                        "start": 12,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194320,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 18
                            },
                            "flags": 4194352,
                            "transformFlags": 8,
                            "start": 5,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 19
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "wrap({'a':b, 'c':d});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

wrap({'\'a\'': b, '\'c\'': d});
```

### Diagnostics

```javascript
✔ No errors
```

