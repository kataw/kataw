# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: e
> :: test: { triple
> :: case: /false//a
## Input

`````js
{ { { /false//a
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 221,
                                                        "text": "/false/",
                                                        "flags": 96,
                                                        "start": 5,
                                                        "end": 13
                                                    },
                                                    "operatorToken": {
                                                        "kind": 35640,
                                                        "flags": 64,
                                                        "start": 13,
                                                        "end": 14
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 14,
                                                        "end": 15
                                                    },
                                                    "flags": 32,
                                                    "start": 5,
                                                    "end": 15
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 15
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 15
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 15
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "{ { { /false//a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 15, end: 15

```

