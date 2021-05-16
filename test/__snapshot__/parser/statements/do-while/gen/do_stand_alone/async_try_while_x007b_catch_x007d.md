# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do stand alone
> :: case: async try while { catch }
## Input

`````js
do async try while { catch }
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
                "flags": 64,
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
                            "text": "catch",
                            "rawText": "catch",
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
                "flags": 48,
                "start": 18,
                "end": 28
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 28,
                    "end": 28
                },
                "flags": 16,
                "start": 28,
                "end": 28
            },
            "flags": 16,
            "start": 12,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "do async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations are not allowed in an arbitrary statement position. - start: 2, end: 8
✖ Expected a `;` - start: 8, end: 12
✖ Expression expected - start: 12, end: 18
✖ Property definition expected. Did you mean to use a ':'? - start: 26, end: 28
✖ Expected a ')' to match the '(' token here - start: 28, end: 28

```

