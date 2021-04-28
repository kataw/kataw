# Kataw parser test case

## Input

`````js
obj?.a?.b
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
                "chainToken": {
                    "kind": 393240,
                    "flags": 0,
                    "start": 6,
                    "end": 8
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    "chain": {
                        "kind": 206,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 5,
                                "end": 6
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "obj?.a?.b",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

