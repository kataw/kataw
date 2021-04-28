# Kataw parser test case

## Input

`````js
a?.b * d
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
                "kind": 198,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 1,
                        "start": 0,
                        "end": 3
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 0,
                        "end": 1
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
                                "flags": 768,
                                "start": 3,
                                "end": 4
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 4
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 4
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 512,
                    "start": 4,
                    "end": 6
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 768,
                    "start": 6,
                    "end": 8
                },
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "a?.b * d",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
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

