# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: (a b, c = b : string)
## Input

`````js
{ {} finally(x) { (a b, c = b : string)
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
                            "statements": [],
                            "multiLine": false,
                            "flags": 128,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 128,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 128,
                            "start": 12,
                            "end": 12
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 128,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 4,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 13,
                        "end": 14
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
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
                                "start": 17,
                                "end": 20
                            },
                            "flags": 256,
                            "start": 17,
                            "end": 20
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 20
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
                                    "start": 20,
                                    "end": 22
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 768,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 25,
                                        "start": 512,
                                        "end": 27
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "flags": 256,
                                    "start": 23,
                                    "end": 29
                                }
                            ],
                            "flags": 256,
                            "start": 20,
                            "end": 29
                        },
                        "flags": 128,
                        "start": 20,
                        "end": 29
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 29
            },
            "flags": 128,
            "start": 15,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 768,
                "start": 31,
                "end": 38
            },
            "flags": 128,
            "start": 31,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "{ {} finally(x) { (a b, c = b : string)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 14, end: 15
✖ Statement expected - start: 29, end: 31
✖ Statement expected - start: 38, end: 39

```

