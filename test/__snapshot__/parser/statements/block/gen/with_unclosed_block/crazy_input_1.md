# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: crazy input 1
## Input

`````js
{ {} finally(x) { crazy input 1
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
                            "kind": 134299649,
                            "text": "crazy",
                            "rawText": "crazy",
                            "flags": 768,
                            "start": 17,
                            "end": 23
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 23
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "input",
                            "rawText": "input",
                            "flags": 768,
                            "start": 23,
                            "end": 29
                        },
                        "flags": 128,
                        "start": 23,
                        "end": 29
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 29,
                            "end": 31
                        },
                        "flags": 128,
                        "start": 29,
                        "end": 31
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 31
            },
            "flags": 128,
            "start": 15,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "{ {} finally(x) { crazy input 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 4, end: 12
@{x2716}@ Unexpected token. - start: 12, end: 13
@{x2716}@ Unexpected token. - start: 12, end: 13
@{x2716}@ Unexpected token. - start: 13, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 15
@{x2716}@ Unexpected token. - start: 14, end: 15
@{x2716}@ Statement expected - start: 14, end: 15
@{x2716}@ Unexpected token. - start: 23, end: 29
@{x2716}@ Unexpected token. - start: 29, end: 31
@{x2716}@ Unexpected token. - start: 31, end: 31

```

