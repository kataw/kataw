# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: (a b, c = b : string)
## Input

`````js
{ { { (a b, c = b : string)
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
                        "kind": 249,
                        "block": {
                            "kind": 124,
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
                                                        "kind": 132,
                                                        "flags": 256,
                                                        "start": 5,
                                                        "end": 8
                                                    },
                                                    "flags": 256,
                                                    "start": 5,
                                                    "end": 8
                                                },
                                                "flags": 128,
                                                "start": 5,
                                                "end": 8
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 5,
                                        "end": 8
                                    },
                                    "flags": 128,
                                    "start": 3,
                                    "end": 8
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 3,
                            "end": 8
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 8
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
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
                        "start": 8,
                        "end": 10
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 13,
                            "end": 15
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 256,
                        "start": 11,
                        "end": 17
                    }
                ],
                "flags": 256,
                "start": 8,
                "end": 17
            },
            "flags": 128,
            "start": 8,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 768,
                "start": 19,
                "end": 26
            },
            "flags": 128,
            "start": 19,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "{ { { (a b, c = b : string)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

