# Kataw parser test case

## Input

`````js
(a[b]) += 1;
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 5
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 6,
                    "start": 512,
                    "end": 9
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "(a[b]) += 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

