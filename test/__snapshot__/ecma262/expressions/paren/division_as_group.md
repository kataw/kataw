# Kataw parser test case

## Input

`````js
({ident: [foo, bar]/x})
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
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 10,
                                                    "end": 13
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 14,
                                                    "end": 18
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 8,
                                        "end": 19
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 19,
                                        "end": 20
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "transformFlags": 5120,
                                    "start": 2,
                                    "end": 21
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 21
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 22
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "({ident: [foo, bar]/x})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
({ ident: [foo, bar] / x });
```

### Diagnostics

```javascript
✔ No errors
```

