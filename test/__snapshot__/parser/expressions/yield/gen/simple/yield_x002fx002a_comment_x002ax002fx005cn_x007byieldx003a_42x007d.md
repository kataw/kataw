# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield /* comment */\n {yield: 42}
## Input

`````js
yield /* comment */\n {yield: 42}
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
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 20,
                "end": 21
            },
            "flags": 16,
            "start": 20,
            "end": 21
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 23,
                            "end": 28
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 0,
                            "start": 28,
                            "end": 29
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 29,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 29,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 23,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 23,
                "end": 32
            },
            "flags": 16,
            "start": 21,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "yield /* comment */\\n {yield: 42}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 5, end: 19
✖ Statement expected - start: 5, end: 20

```

