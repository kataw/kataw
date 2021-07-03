# Kataw parser test case

## Input

`````js
(debugger);
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
                    "rawText": "",
                    "flags": 64,
                    "start": 1,
                    "end": 1
                },
                "flags": 0,
                "start": 32,
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
                "flags": 80,
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

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 9
✖ Expected a `;` - start: 9, end: 10

```

