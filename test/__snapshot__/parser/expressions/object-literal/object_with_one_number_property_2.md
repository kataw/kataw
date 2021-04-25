# Kataw parser test case

## Input

`````js
wrap({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});
`````

## Output

### Hybrid CST

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
                    "flags": 768,
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
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0.9,
                                            "rawText": ".9",
                                            "flags": 525056,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "flags": 256,
                                        "start": 6,
                                        "end": 10
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 132,
                                            "rawText": "0x84",
                                            "flags": 16777984,
                                            "start": 11,
                                            "end": 16
                                        },
                                        "flags": 256,
                                        "start": 11,
                                        "end": 18
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 768,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "0b1",
                                            "flags": 8389376,
                                            "start": 19,
                                            "end": 23
                                        },
                                        "flags": 256,
                                        "start": 19,
                                        "end": 25
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 768,
                                            "start": 32,
                                            "end": 33
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 23,
                                            "rawText": "0o27",
                                            "flags": 4195072,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "flags": 256,
                                        "start": 26,
                                        "end": 33
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 768,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1e+234,
                                            "rawText": "1e234",
                                            "flags": 768,
                                            "start": 34,
                                            "end": 40
                                        },
                                        "flags": 256,
                                        "start": 34,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 6,
                                "end": 42
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 5,
                    "end": 43
                },
                "flags": 256,
                "start": 0,
                "end": 44
            },
            "flags": 128,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "wrap({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

