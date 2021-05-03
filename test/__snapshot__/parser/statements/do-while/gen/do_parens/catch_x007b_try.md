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
                "flags": 0,
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
                            "flags": 96,
                            "start": 11,
                            "end": 15
                        },
                        {
                            "kind": 134299649,
                            "text": "while",
                            "rawText": "while",
                            "flags": 96,
                            "start": 15,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 11,
                    "end": 21
                },
                "flags": 32,
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
                        "flags": 68,
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
            "end": 21
        }
    ],
    "isModule": false,
    "source": "do( catch { try while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 3, end: 9
✖ Expected a ')' to match the '(' token here - start: 3, end: 9
✖ Expected a `;` - start: 3, end: 9
✖ Property assignment expected - start: 15, end: 21
✖ ',' expected - start: 15, end: 21
✖ Property assignment expected - start: 21, end: 21
✖ ',' expected - start: 21, end: 21
✖ The parser expected to find a '}' to match the '{' token here - start: 21, end: 21

```

