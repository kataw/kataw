# Kataw parser test case

## Input

`````js
(...x);
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
                        "flags": 768,
                        "start": 1,
                        "end": 4
                    },
                    "binding": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 4,
                        "end": 5
                    },
                    "optionalToken": null,
                    "type": null,
                    "initializer": null,
                    "flags": 258,
                    "start": 1,
                    "end": 5
                },
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "(...x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

