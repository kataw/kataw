# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: async try while { catch }
## Input

`````js
do( async try while { catch } while
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
                "autofix": 0,
                "flags": 12,
                "start": 13,
                "end": 13
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "flags": 256,
                        "start": 2,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 9
                },
                "flags": 128,
                "start": 2,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 13,
                "end": 19
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
                            "start": 21,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 21,
                    "end": 27
                },
                "flags": 256,
                "start": 19,
                "end": 29
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 768,
                    "start": 29,
                    "end": 35
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 35,
                    "end": 35
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 128,
                    "start": 35,
                    "end": 35
                },
                "flags": 128,
                "start": 29,
                "end": 35
            },
            "flags": 128,
            "start": 13,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "do( async try while { catch } while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

