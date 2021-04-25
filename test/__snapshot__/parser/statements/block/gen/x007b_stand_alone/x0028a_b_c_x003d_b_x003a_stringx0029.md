# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: (a b, c = b : string)
## Input

`````js
{ (a b, c = b : string)
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
                                "kind": 132,
                                "flags": 256,
                                "start": 1,
                                "end": 4
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 4
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 4
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
                                    "start": 4,
                                    "end": 6
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 768,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "flags": 256,
                                    "start": 7,
                                    "end": 13
                                }
                            ],
                            "flags": 256,
                            "start": 4,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 4,
                        "end": 13
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 768,
                "start": 15,
                "end": 22
            },
            "flags": 128,
            "start": 15,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "{ (a b, c = b : string)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 4, end: 6
@{x2716}@ Unexpected token. - start: 4, end: 6
@{x2716}@ Unexpected token. - start: 13, end: 15
@{x2716}@ Unexpected token. - start: 13, end: 15
@{x2716}@ Statement expected - start: 13, end: 15
@{x2716}@ Unexpected token. - start: 22, end: 23
@{x2716}@ Statement expected - start: 22, end: 23

```

