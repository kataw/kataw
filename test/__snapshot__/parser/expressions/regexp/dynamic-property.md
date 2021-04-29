# Kataw parser test case

## Input

`````js
)=/++!{class
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
                "kind": 221,
                "text": "/++!{class",
                "flags": 96,
                "start": 2,
                "end": 12
            },
            "flags": 16,
            "start": 2,
            "end": 12
        }
    ],
    "isModule": false,
    "text": ")=/++!{class",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 0, end: 1
✖ Statement expected - start: 1, end: 2
✖ Unterminated regular expression - start: 2, end: 3

```

