# Kataw parser test case

## Input

`````js
obj.voi\u0064 = 42;
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
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 4,
                    "end": 4
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 4
            },
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 4259887,
                        "flags": 768,
                        "start": 4,
                        "end": 13
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 13,
                        "end": 13
                    },
                    "flags": 256,
                    "start": 4,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "right": {
                    "kind": 134299649,
                    "text": 42,
                    "rawText": "42",
                    "flags": 768,
                    "start": 15,
                    "end": 18
                },
                "flags": 256,
                "start": 4,
                "end": 18
            },
            "flags": 128,
            "start": 4,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "obj.voi\\u0064 = 42;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

