# Kataw parser test case

## Input

`````js
"\115
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
                "kind": 67174403,
                "text": "115",
                "rawText": "\"\\115",
                "flags": 33555200,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "text": "\"\\115",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 5
        }
    ],
    "start": 0,
    "end": 5
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

