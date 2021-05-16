# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: try { !xxx
## Input

`````js
do( try { !xxx while
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
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 9,
                    "end": 9
                },
                "flags": 48,
                "start": 7,
                "end": 9
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
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
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 14,
                "end": 20
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 20,
                "end": 20
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 20,
                    "end": 20
                },
                "flags": 16,
                "start": 20,
                "end": 20
            },
            "flags": 16,
            "start": 14,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "do( try { !xxx while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 3, end: 7
✖ The parser expected to find a '}' to match the '{' token here - start: 9, end: 11
✖ Expected a `;` - start: 14, end: 20

```

