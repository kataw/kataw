# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: \u0073witch
## Input

`````js
(\u0073witch = x);
`````
## Output

### CST

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
                    "flags": 64,
                    "start": 1,
                    "end": 1
                },
                "flags": 32,
                "start": 0,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 16384,
                "start": 1,
                "end": 12
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 12,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 12,
                    "end": 14
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 32,
                "start": 12,
                "end": 16
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 17,
                "end": 17
            },
            "flags": 16,
            "start": 1,
            "end": 17
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 17,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "(\\u0073witch = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 1, end: 12
✖ Expression expected - start: 12, end: 14
✖ The parser expected to find a '}' to match the '{' token here - start: 17, end: 18

```

