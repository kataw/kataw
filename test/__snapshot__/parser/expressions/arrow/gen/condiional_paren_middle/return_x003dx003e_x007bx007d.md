# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: condiional_paren_middle
> :: case: return => {}
## Input

`````js
bar ? (return => {}) : baz;
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 7,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 7
                },
                "colonToken": null,
                "alternate": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 13,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 16,
                "start": 18,
                "end": 18
            },
            "flags": 16,
            "start": 16,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "baz",
                "rawText": "baz",
                "flags": 96,
                "start": 22,
                "end": 26
            },
            "flags": 16,
            "start": 22,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "bar ? (return => {}) : baz;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 7, end: 13
✖ Expression expected - start: 13, end: 16
✖ Statement expected - start: 13, end: 16
✖ Statement expected - start: 19, end: 20
✖ Statement expected - start: 20, end: 22

```

