# Kataw parser test case

## Input

`````js
debugger
/bar/
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/bar/",
                "rawText": "/bar/",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 8,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "debugger\n/bar/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
debugger;
/bar/;

```

### Diagnostics

```javascript
✔ No errors
```

