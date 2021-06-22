# Kataw parser test case

## Input

`````js
new.t\u0061rget
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
                "kind": 211,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "targetIdentifier": {
                    "kind": 16594,
                    "flags": 16480,
                    "start": 4,
                    "end": 15
                },
                "flags": 96,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "new.t\\u0061rget",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 4, end: 15
✖ 'new.target' only allowed within functions - start: 0, end: 15

```

