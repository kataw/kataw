# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: d
- Path: y
> :: test: with unclosed array
> :: case: {try
## Input

`````js
{[ {try
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "try",
                                                    "rawText": "try",
                                                    "flags": 96,
                                                    "start": 4,
                                                    "end": 7
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 4,
                                            "end": 7
                                        },
                                        "flags": 48,
                                        "start": 2,
                                        "end": 7
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 7
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "{[ {try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 7, end: 7
✖ ',' expected - start: 7, end: 7

```

