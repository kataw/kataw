# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: : string
## Input

`````js
{( : string
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
                            "kind": 121,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 2
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 2
            },
            "flags": 128,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 768,
                "start": 4,
                "end": 11
            },
            "flags": 128,
            "start": 4,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "{( : string",
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
✖ Expression expected - start: 2, end: 4
✖ Statement expected - start: 2, end: 4

```

