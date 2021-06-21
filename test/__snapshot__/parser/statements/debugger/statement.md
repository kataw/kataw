# Kataw parser test case

## Input

`````js
while (false) debugger;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "start": 7,
                "end": 12
            },
            "statement": {
                "kind": 171,
                "debuggerKeyword": {
                    "kind": 37757010,
                    "flags": 80,
                    "start": 13,
                    "end": 22
                },
                "flags": 16,
                "start": 13,
                "end": 23
            },
            "flags": 80,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "while (false) debugger;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

 while (false) debugger; 
```

### Diagnostics

```javascript
✔ No errors
```

