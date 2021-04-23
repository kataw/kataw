# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: (a b, c = b : string)
## Input

`````js
{( (a b, c = b : string)
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
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 5
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 5
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 5
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 5
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 5,
                        "end": 7
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 8,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 10,
                            "end": 12
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 14
                    }
                ],
                "flags": 256,
                "start": 5,
                "end": 14
            },
            "flags": 128,
            "start": 5,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 768,
                "start": 16,
                "end": 23
            },
            "flags": 128,
            "start": 16,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "{( (a b, c = b : string)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

