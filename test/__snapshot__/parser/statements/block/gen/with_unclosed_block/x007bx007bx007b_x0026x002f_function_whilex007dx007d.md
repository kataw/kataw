# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: {{{ &/ function while}}
## Input

`````js
{ {} finally(x) { {{{ &/ function while}}
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
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "flags": 12,
                                                                    "start": 21,
                                                                    "end": 21
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 34375,
                                                                    "flags": 512,
                                                                    "start": 21,
                                                                    "end": 23
                                                                },
                                                                "right": {
                                                                    "kind": 221,
                                                                    "text": "/ function while}}",
                                                                    "flags": 768,
                                                                    "start": 23,
                                                                    "end": 41
                                                                },
                                                                "flags": 256,
                                                                "start": 21,
                                                                "end": 41
                                                            },
                                                            "flags": 128,
                                                            "start": 21,
                                                            "end": 41
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "flags": 128,
                                                    "start": 21,
                                                    "end": 41
                                                },
                                                "flags": 128,
                                                "start": 20,
                                                "end": 41
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 20,
                                        "end": 41
                                    },
                                    "flags": 128,
                                    "start": 19,
                                    "end": 41
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 19,
                            "end": 41
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 41
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 41
            },
            "flags": 128,
            "start": 15,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "{ {} finally(x) { {{{ &/ function while}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 14, end: 15
✖ Expression expected - start: 21, end: 23
✖ Unexpected token. - start: 23, end: 24

```

