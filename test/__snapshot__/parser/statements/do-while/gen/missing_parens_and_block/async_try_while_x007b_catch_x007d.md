# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
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
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 12,
                "end": 12
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "original": "async",
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 2,
                    "end": 8
                },
                "flags": 16,
                "start": 2,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
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
                            "original": "catch",
                            "text": "catch",
                            "rawText": " catch",
                            "flags": 96,
                            "start": 20,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 20,
                    "end": 26
                },
                "flags": 32,
                "start": 18,
                "end": 28
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 28,
                    "end": 34
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 34,
                    "end": 34
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 34,
                        "end": 34
                    },
                    "flags": 16,
                    "start": 34,
                    "end": 34
                },
                "flags": 16,
                "start": 28,
                "end": 34
            },
            "flags": 16,
            "start": 12,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "do async try while { catch } while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Function declarations are not allowed in an arbitrary statement position. - start: 2, end: 8
✖ Expected a `;` - start: 8, end: 12
✖ Expression expected - start: 12, end: 18
✖ Expression expected - start: 34, end: 34
✖ Expression expected - start: 34, end: 34

```

