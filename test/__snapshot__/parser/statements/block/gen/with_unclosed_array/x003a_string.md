# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: : string
## Input

`````js
{[ : string
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 2
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "string",
                "text": "string",
                "rawText": " string",
                "flags": 96,
                "start": 4,
                "end": 11
            },
            "flags": 16,
            "start": 4,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "{[ : string",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 2, end: 4
✖ Statement expected - start: 2, end: 4

```

