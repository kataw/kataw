# Kataw parser test case

## Input

`````js
continue: x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 8,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": " x",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "flags": 16,
            "start": 9,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "continue: x;",
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
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 0, end: 8
✖ Expression expected - start: 8, end: 9
✖ Expected a `;` - start: 8, end: 9
✖ Statement expected - start: 8, end: 9

```

