# Kataw parser test case

## Input

`````js
continue
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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "label": null,
            "flags": 128,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "continue",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 45,
            "error": "A 'continue' statement can only be used within an enclosing iteration statement.",
            "start": 0,
            "end": 8
        }
    ],
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

