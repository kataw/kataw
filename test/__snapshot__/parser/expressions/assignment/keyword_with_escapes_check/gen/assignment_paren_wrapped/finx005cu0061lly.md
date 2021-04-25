# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: fin\u0061lly
## Input

`````js
(fin\u0061lly = x);
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
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 1,
                    "end": 1
                },
                "flags": 256,
                "start": 0,
                "end": 1
            },
            "flags": 128,
            "start": 0,
            "end": 1
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
                    "start": 13,
                    "end": 13
                },
                "flags": 128,
                "start": 13,
                "end": 13
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
                    "start": 15,
                    "end": 15
                },
                "flags": 128,
                "start": 15,
                "end": 15
            },
            "flags": 128,
            "start": 1,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 15,
                "end": 17
            },
            "flags": 128,
            "start": 15,
            "end": 17
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 18,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "(fin\\u0061lly = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 1, end: 13
@{x2716}@ Unexpected token. - start: 1, end: 13
@{x2716}@ Unexpected token. - start: 1, end: 13
@{x2716}@ Unexpected token. - start: 1, end: 13
@{x2716}@ Unexpected token. - start: 13, end: 15
@{x2716}@ Unexpected token. - start: 13, end: 15
@{x2716}@ Unexpected token. - start: 15, end: 17
@{x2716}@ Unexpected token. - start: 17, end: 18
@{x2716}@ Statement expected - start: 17, end: 18

```

