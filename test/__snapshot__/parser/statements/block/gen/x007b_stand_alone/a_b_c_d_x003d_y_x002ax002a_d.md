# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: a,b, c d = y ** d
## Input

`````js
{ a,b, c d = y ** d
`````

## Output

### CST

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
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 3
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 5
                                },
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 8
                                }
                            ],
                            "flags": 32,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 8
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 8,
                                "end": 10
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 10,
                                "end": 12
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 14
                                },
                                "operatorToken": {
                                    "kind": 35897,
                                    "flags": 64,
                                    "start": 14,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 32,
                                "start": 12,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 19
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "{ a,b, c d = y ** d",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 8, end: 10
✖ The parser expected to find a '}' to match the '{' token here - start: 19, end: 19

```

