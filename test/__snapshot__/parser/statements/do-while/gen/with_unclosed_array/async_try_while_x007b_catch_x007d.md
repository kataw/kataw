# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: async try while { catch }
## Input

`````js
do[ async try while { catch }
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
                "start": 13,
                "end": 13
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 3,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 3,
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
                            "rawText": " catch",
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
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 29,
                    "end": 29
                },
                "flags": 16,
                "start": 29,
                "end": 29
            },
            "flags": 16,
            "start": 13,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "do[ async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 9, end: 13
✖ Expected a `;` - start: 9, end: 13
✖ Expression expected - start: 13, end: 19
✖ Expression expected - start: 29, end: 29

```

