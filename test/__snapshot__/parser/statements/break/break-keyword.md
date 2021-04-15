# Kataw parser test case

## Input

`````js
break
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 150,
            "breakKeyword": {
                "kind": 37757005,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "label": null,
            "flags": 128,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "text": "break",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 46,
            "error": "A 'break' statement can only be used within an enclosing iteration or switch statement.",
            "start": 5,
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

