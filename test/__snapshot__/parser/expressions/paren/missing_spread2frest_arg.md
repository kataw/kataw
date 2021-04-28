# Kataw parser test case

## Input

`````js
(...);
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
                "kind": 121,
                "expression": {
                    "kind": 215,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 64,
                        "start": 1,
                        "end": 4
                    },
                    "binding": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 4,
                        "end": 4
                    },
                    "optionalToken": null,
                    "type": null,
                    "initializer": null,
                    "flags": 34,
                    "start": 1,
                    "end": 4
                },
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "(...);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 4, end: 5

```

