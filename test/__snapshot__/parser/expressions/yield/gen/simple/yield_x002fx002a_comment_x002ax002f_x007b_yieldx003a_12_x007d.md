# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield /* comment */ { yield: 12 }
## Input

`````js
yield /* comment */ { yield: 12 }
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
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": " yield",
                            "flags": 96,
                            "start": 21,
                            "end": 27
                        },
                        "labels": [
                            {
                                "kind": 256,
                                "label": "yield",
                                "iterationStatement": false,
                                "flags": 16,
                                "start": 21,
                                "end": 27
                            }
                        ],
                        "colonToken": {
                            "kind": 21,
                            "flags": 0,
                            "start": 27,
                            "end": 28
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 12,
                                "rawText": "12",
                                "flags": 96,
                                "start": 28,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 28,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 21,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 21,
                "end": 31
            },
            "flags": 16,
            "start": 5,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "yield /* comment */ { yield: 12 }",
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
✖ Expected a `;` - start: 5, end: 21

```

