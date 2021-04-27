# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do while
> :: case: async try while { catch }
## Input

`````js
do async try while { catch } while
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
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 12,
                "end": 12
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 768,
                    "start": 2,
                    "end": 8
                },
                "flags": 128,
                "start": 2,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 12
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 12,
                "end": 18
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
                            "start": 20,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 20,
                    "end": 26
                },
                "flags": 256,
                "start": 18,
                "end": 28
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 768,
                    "start": 28,
                    "end": 34
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 34,
                    "end": 34
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 34,
                        "end": 34
                    },
                    "flags": 128,
                    "start": 34,
                    "end": 34
                },
                "flags": 128,
                "start": 28,
                "end": 34
            },
            "flags": 128,
            "start": 12,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "do async try while { catch } while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 12, end: 18
@{x2716}@ Expression expected - start: 34, end: 34
@{x2716}@ Expression expected - start: 34, end: 34

```

