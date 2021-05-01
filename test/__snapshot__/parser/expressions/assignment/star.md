# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
a *= b
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
                    "kind": 134299649,
                    "original": "a",
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4132,
                    "flags": 64,
                    "start": 1,
                    "end": 4
                },
                "right": {
                    "kind": 134299649,
                    "original": "b",
                    "text": "b",
                    "rawText": " b",
                    "flags": 96,
                    "start": 4,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": true,
    "source": "a *= b",
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
✔ No errors
```

