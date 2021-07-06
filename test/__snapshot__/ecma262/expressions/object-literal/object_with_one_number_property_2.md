# Kataw parser test case

## Input

`````js
wrap({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});
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
                                            "kind": 201392130,
                                            "text": 0.9,
                                            "rawText": ".9",
                                            "flags": 32864,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "flags": 32800,
                                        "transformFlags": 128,
                                        "start": 6,
                                        "end": 10
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 132,
                                            "rawText": "0x84",
                                            "flags": 1048672,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "flags": 1048608,
                                        "transformFlags": 128,
                                        "start": 11,
                                        "end": 18
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "0b1",
                                            "flags": 524384,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 23
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "flags": 524320,
                                        "transformFlags": 128,
                                        "start": 19,
                                        "end": 25
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 23,
                                            "rawText": "0o27",
                                            "flags": 262240,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 33
                                        },
                                        "flags": 262176,
                                        "transformFlags": 128,
                                        "start": 26,
                                        "end": 33
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1e+234,
                                            "rawText": "1e234",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 40
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 34,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32784,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 42
                            },
                            "flags": 32816,
                            "transformFlags": 8,
                            "start": 5,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 43
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "wrap({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

wrap({ 0.9: a, 0x84: b, 0b1: c, 0o27: d, 1e234: e });
```

### Diagnostics

```javascript
✔ No errors
```

