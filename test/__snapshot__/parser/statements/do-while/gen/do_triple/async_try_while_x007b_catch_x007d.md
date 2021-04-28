# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: async try while { catch }
## Input

`````js
do do do async try while { catch } while while while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 40,
                "end": 40
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 34,
                "end": 40
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "catch",
                                "rawText": "catch",
                                "flags": 768,
                                "start": 26,
                                "end": 32
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 26,
                        "end": 32
                    },
                    "flags": 256,
                    "start": 24,
                    "end": 34
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 18,
                    "end": 24
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 18,
                        "end": 18
                    },
                    "whileKeyword": null,
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 8,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 128,
                    "start": 5,
                    "end": 18
                },
                "flags": 128,
                "start": 2,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 40
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 40,
                "end": 46
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 46,
                "end": 46
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 46,
                    "end": 52
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 52,
                    "end": 52
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 52,
                        "end": 52
                    },
                    "flags": 128,
                    "start": 52,
                    "end": 52
                },
                "flags": 128,
                "start": 46,
                "end": 52
            },
            "flags": 128,
            "start": 40,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "do do do async try while { catch } while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 18, end: 24
✖ Expression expected - start: 40, end: 46
✖ Expression expected - start: 46, end: 52
✖ Expression expected - start: 52, end: 52
✖ Expression expected - start: 52, end: 52

```

