# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if else
> :: case: /false//a
## Input

`````js
if /false//a else
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 221,
                    "text": "/false/",
                    "flags": 768,
                    "start": 2,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 768,
                    "start": 10,
                    "end": 11
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 11,
                    "end": 12
                },
                "flags": 256,
                "start": 2,
                "end": 12
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 12,
                    "end": 12
                },
                "flags": 128,
                "start": 12,
                "end": 12
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 768,
                "start": 12,
                "end": 17
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 17,
                    "end": 17
                },
                "flags": 128,
                "start": 17,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "if /false//a else",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 2, end: 10
@{x2716}@ Unexpected token. - start: 12, end: 17
@{x2716}@ Expression expected - start: 12, end: 17
@{x2716}@ Unexpected token. - start: 12, end: 17
@{x2716}@ Expression expected - start: 17, end: 17

```

