# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield * \n { yield: 12 }
## Input

`````js
yield * \n { yield: 12 }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 7,
                    "end": 7
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 9,
                "end": 10
            },
            "flags": 16,
            "start": 9,
            "end": 10
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 12,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 12,
                "end": 18
            },
            "flags": 16,
            "start": 10,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 12,
                "rawText": "12",
                "flags": 96,
                "start": 19,
                "end": 22
            },
            "flags": 16,
            "start": 19,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "yield * \\n { yield: 12 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 7, end: 8
✖ Expression expected - start: 7, end: 9
✖ Statement expected - start: 7, end: 9
✖ Statement expected - start: 18, end: 19
✖ Statement expected - start: 22, end: 24

```

