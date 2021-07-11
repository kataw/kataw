# Kataw parser test case

## Input

`````js
~a
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
                "kind": 126,
                "operandToken": {
                    "kind": 65585,
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operand": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 2
        }
    ],
    "isModule": false,
    "source": "~a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 2
}
```

### Printed

```javascript

~ a;

```

### Diagnostics

```javascript
✔ No errors
```

