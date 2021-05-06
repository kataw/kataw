# Kataw parser test case

## Input

`````js
switch /a/i) {}

switch /a/i {}

switch (/a/i {}
`````

## Output

### CST

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
                "flags": 96,
                "start": 6,
                "end": 11
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 12,
                "end": 15
            },
            "flags": 16,
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
                "flags": 96,
                "start": 23,
                "end": 28
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 28,
                "end": 31
            },
            "flags": 16,
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
                "flags": 96,
                "start": 41,
                "end": 45
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 45,
                "end": 48
            },
            "flags": 16,
            "start": 31,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "switch /a/i) {}\n\nswitch /a/i {}\n\nswitch (/a/i {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

switch(/a/i

switch(/a/i

switch(/a/i
 
```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 28, end: 30
✖ Expected a ')' to match the '(' token here - start: 45, end: 47

```

