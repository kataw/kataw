# Kataw parser test case

## Input

`````js
({ident: [foo, bar]/x/g})
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 198,
                                    "left": {
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
                                                        "flags": 768,
                                                        "start": 10,
                                                        "end": 13
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 768,
                                                        "start": 14,
                                                        "end": 18
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 10,
                                                "end": 18
                                            },
                                            "flags": 256,
                                            "start": 8,
                                            "end": 19
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 512,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 21
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 512,
                                        "start": 21,
                                        "end": 22
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 768,
                                        "start": 22,
                                        "end": 23
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "ident",
                                    "rawText": "ident",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 7
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "({ident: [foo, bar]/x/g})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

