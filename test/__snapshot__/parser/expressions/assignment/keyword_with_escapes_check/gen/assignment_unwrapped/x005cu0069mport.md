# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: \u0069mport
## Input

`````js
\u0069mport = x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 263,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 13,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "\\u0069mport = x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 59,
            "error": "The `import` keyword can only be used with the module goal",
            "start": 11,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 11,
            "end": 13
        }
    ],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: \u0069mport
## Input

`````js
\u0069mport = x;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: \u0069mport
## Input

`````js
\u0069mport = x;
`````
```

