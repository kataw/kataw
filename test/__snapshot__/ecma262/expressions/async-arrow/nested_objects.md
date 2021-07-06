# Kataw parser test case

## Input

`````js
async ({ident: {x: y}})
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 5
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
                                        "kind": 134299649,
                                        "text": "ident",
                                        "rawText": "ident",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 13
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
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 16,
                                                        "end": 17
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 20
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 16,
                                                    "end": 20
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 14,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 8,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 21
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 7,
                        "end": 22
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 0
            },
            "flags": 268435490,
            "transformFlags": 1,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "async ({ident: {x: y}})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
async({ ident: { x: y } })
```

### Diagnostics

```javascript
✔ No errors
```

