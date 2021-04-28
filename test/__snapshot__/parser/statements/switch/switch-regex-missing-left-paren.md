# Kataw parser test case

## Input

`````js
switch /a/i) {}

switch /a/i {}

switch (/a/i {}
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
                "kind": 221,
                "text": "/a/i",
                "flags": 768,
                "start": 6,
                "end": 11
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 12,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 15,
                "end": 23
            },
            "expression": {
                "kind": 221,
                "text": "/a/i",
                "flags": 768,
                "start": 23,
                "end": 28
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 28,
                "end": 31
            },
            "flags": 128,
            "start": 15,
            "end": 31
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 31,
                "end": 39
            },
            "expression": {
                "kind": 221,
                "text": "/a/i",
                "flags": 768,
                "start": 41,
                "end": 45
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 45,
                "end": 48
            },
            "flags": 128,
            "start": 31,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "switch /a/i) {}\n\nswitch /a/i {}\n\nswitch (/a/i {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

