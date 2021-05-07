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
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 9,
                    "end": 9
                },
                "flags": 32,
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
                        "flags": 32,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 3
                },
                "flags": 16,
                "start": 2,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 9,
                    "end": 11
                },
                "operand": {
                    "kind": 134299649,
                    "text": "xxx",
                    "rawText": "xxx",
                    "flags": 96,
                    "start": 11,
                    "end": 14
                },
                "flags": 32,
                "start": 9,
                "end": 14
            },
            "flags": 16,
            "start": 9,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "do[ try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 7
✖ The parser expected to find a '}' to match the '{' token here - start: 9, end: 11

```

