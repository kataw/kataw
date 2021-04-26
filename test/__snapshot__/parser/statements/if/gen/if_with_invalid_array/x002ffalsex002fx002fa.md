# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: if with invalid array
> :: case: /false//a
## Input

`````js
if [else] /false//a
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 4,
                    "end": 4
                },
                "flags": 256,
                "start": 2,
                "end": 4
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 4,
                    "end": 4
                },
                "flags": 128,
                "start": 4,
                "end": 4
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 768,
                "start": 4,
                "end": 8
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 8,
                    "end": 8
                },
                "flags": 128,
                "start": 8,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 221,
                    "text": "/false/",
                    "flags": 768,
                    "start": 9,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 768,
                    "start": 17,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 18,
                    "end": 19
                },
                "flags": 256,
                "start": 9,
                "end": 19
            },
            "flags": 128,
            "start": 9,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "if [else] /false//a",
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
@{x2716}@ Expression expected - start: 4, end: 8
@{x2716}@ Expression expected - start: 8, end: 9
@{x2716}@ Statement expected - start: 8, end: 9

```

