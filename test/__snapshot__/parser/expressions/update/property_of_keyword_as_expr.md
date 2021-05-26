# Kataw parser test case

## Input

`````js
(--this.x)
`````

## Output

### CST

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
                    "kind": 128,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 64,
                        "start": 1,
                        "end": 3
                    },
                    "operand": {
                        "kind": 129,
                        "member": {
                            "kind": 135,
                            "flags": 3,
                            "start": 96,
                            "end": 7
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 536870944,
                        "start": 3,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "(--this.x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

(--this.x);
```

### Diagnostics

```javascript
✔ No errors
```

