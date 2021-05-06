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

### CST

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
                        "flags": 32,
                        "start": 2,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 9
                },
                "flags": 16,
                "start": 2,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
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
                            "flags": 96,
                            "start": 21,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 21,
                    "end": 27
                },
                "flags": 32,
                "start": 19,
                "end": 29
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 29,
                    "end": 35
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 35,
                    "end": 35
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 16,
                    "start": 35,
                    "end": 35
                },
                "flags": 16,
                "start": 29,
                "end": 35
            },
            "flags": 16,
            "start": 13,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "do( async try while { catch } while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 9, end: 13
✖ Expression expected - start: 13, end: 19
✖ Property definition expected. Did you mean to use a ':'? - start: 27, end: 29
✖ Expected a ')' to match the '(' token here - start: 29, end: 35

```

