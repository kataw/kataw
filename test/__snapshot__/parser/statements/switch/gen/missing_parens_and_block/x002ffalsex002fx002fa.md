# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: /false//a
## Input

`````js
switch case /false//a
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
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 768,
                            "start": 6,
                            "end": 11
                        },
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 221,
                                "text": "/false/",
                                "flags": 768,
                                "start": 11,
                                "end": 19
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 768,
                                "start": 19,
                                "end": 20
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 20,
                                "end": 21
                            },
                            "flags": 256,
                            "start": 11,
                            "end": 21
                        },
                        "statements": [],
                        "flags": 128,
                        "start": 6,
                        "end": 21
                    }
                ],
                "flags": 128,
                "start": 6,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "switch case /false//a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 6, end: 11
@{x2716}@ Expression expected - start: 6, end: 11
@{x2716}@ Unexpected token. - start: 6, end: 11
@{x2716}@ Unexpected token. - start: 6, end: 11
@{x2716}@ Unexpected token. - start: 21, end: 21
@{x2716}@ Unexpected token. - start: 21, end: 21

```

