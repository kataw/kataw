# Kataw parser test case

## Input

`````js
(debugger);
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
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
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
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 0,
                "start": 1,
                "end": 9
            },
            "flags": 16,
            "start": 1,
            "end": 9
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 10,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "(debugger);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 1, end: 9
✖ Expected a `;` - start: 1, end: 9
✖ Expected a `;` - start: 9, end: 10
✖ Statement expected - start: 9, end: 10

```

