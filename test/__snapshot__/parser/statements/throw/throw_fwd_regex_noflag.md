# Kataw parser test case

## Input

`````js
return
/x/
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": null,
            "flags": 16,
            "start": 1,
            "end": 0
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/x/",
                "flags": 96,
                "start": 6,
                "end": 10
            },
            "flags": 16,
            "start": 6,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "return\n/x/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6

```

