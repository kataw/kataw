# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: catch { try
## Input

`````js
do( catch { try while
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
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 134299649,
                            "text": "try",
                            "rawText": "try",
                            "flags": 768,
                            "start": 11,
                            "end": 15
                        },
                        {
                            "kind": 134299649,
                            "text": "while",
                            "rawText": "while",
                            "flags": 768,
                            "start": 15,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 11,
                    "end": 21
                },
                "flags": 256,
                "start": 9,
                "end": 21
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 3
                },
                "flags": 128,
                "start": 2,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "do( catch { try while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

