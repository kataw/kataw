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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "expression": null,
            "flags": 80,
            "transformFlags": 256,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/x/",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 6,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "return\n/x/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6

```

