# Kataw parser test case

## Input

`````js
++a;

a++;
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
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 512,
                    "start": 0,
                    "end": 2
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 2,
                    "end": 3
                },
                "flags": 256,
                "start": 0,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 512,
                    "start": 7,
                    "end": 9
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 4,
                    "end": 7
                },
                "flags": 256,
                "start": 4,
                "end": 9
            },
            "flags": 128,
            "start": 4,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "++a;\n\na++;",
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
✔ No errors
```

