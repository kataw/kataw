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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 371,
                "text": "/a/i",
                "rawText": "/a/i",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 11
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 81,
                "transformFlags": 0,
                "start": 15,
                "end": 23
            },
            "expression": {
                "kind": 371,
                "text": "/a/i",
                "rawText": "/a/i",
                "flags": 96,
                "transformFlags": 0,
                "start": 23,
                "end": 28
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 30,
                "end": 30
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 15,
            "end": 31
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 81,
                "transformFlags": 0,
                "start": 31,
                "end": 39
            },
            "expression": {
                "kind": 371,
                "text": "/a/i",
                "rawText": "/a/i",
                "flags": 96,
                "transformFlags": 0,
                "start": 41,
                "end": 45
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 47,
                "end": 47
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 31,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "switch /a/i) {}\n\nswitch /a/i {}\n\nswitch (/a/i {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 7, end: 11
✖ Missing an opening parentheses - '( - start: 24, end: 28
✖ Declaration or statement expected - start: 29, end: 30
✖ Expected a ')' to match the '(' token here - start: 46, end: 47

```

