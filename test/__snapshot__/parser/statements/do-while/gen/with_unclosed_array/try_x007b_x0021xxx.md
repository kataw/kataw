# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: try { !xxx
## Input

`````js
do[ try { !xxx
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
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 9,
                    "end": 9
                },
                "flags": 256,
                "start": 7,
                "end": 9
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
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
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "expression": {
                    "kind": 134299649,
                    "text": "xxx",
                    "rawText": "xxx",
                    "flags": 768,
                    "start": 11,
                    "end": 14
                },
                "flags": 256,
                "start": 9,
                "end": 14
            },
            "flags": 128,
            "start": 9,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "do[ try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
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

