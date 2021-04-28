# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: switch triple
> :: case: /false//a
## Input

`````js
switch switch switch /false//a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 6,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 6,
                "start": 0,
                "end": 13
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 13,
                "end": 13
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 13,
                "end": 13
            },
            "flags": 128,
            "start": 6,
            "end": 13
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 13,
                "start": 0,
                "end": 20
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 221,
                    "text": "/false/",
                    "flags": 768,
                    "start": 20,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 28,
                    "start": 512,
                    "end": 29
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 29,
                    "end": 30
                },
                "flags": 256,
                "start": 20,
                "end": 30
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 30,
                "end": 30
            },
            "flags": 128,
            "start": 13,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "switch switch switch /false//a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 6, end: 13
✖ Expression expected - start: 13, end: 20

```

