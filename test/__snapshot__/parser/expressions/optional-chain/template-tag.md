# Kataw parser test case

## Input

`````js
a?.`x`
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
                "kind": 205,
                "member": {
                    "kind": 81921,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 226,
                        "member": null,
                        "template": {
                            "kind": 458761,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 3,
                            "end": 6
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 6
                },
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "a?.`x`",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 70,
            "error": "Tagged template expressions are not permitted in an optional chain.",
            "start": 3,
            "end": 6
        }
    ],
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

