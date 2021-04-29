# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: switch triple
> :: case: catch try {}
## Input

`````js
switch switch switch catch try {}
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
                "flags": 68,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 6,
                "end": 13
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 13,
                "end": 13
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 6,
            "end": 13
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 13,
                "end": 20
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 20,
                "end": 20
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 20,
                "end": 20
            },
            "flags": 16,
            "start": 13,
            "end": 20
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 26,
                    "end": 26
                },
                "flags": 16,
                "start": 26,
                "end": 26
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 32,
                    "end": 32
                },
                "flags": 16,
                "start": 30,
                "end": 33
            },
            "flags": 16,
            "start": 20,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "switch switch switch catch try {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
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
✖ Expression expected - start: 20, end: 26

```

