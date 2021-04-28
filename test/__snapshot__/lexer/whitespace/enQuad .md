# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
left|right
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
                    "kind": 134299649,
                    "text": "left",
                    "rawText": "left",
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 768,
                    "start": 4,
                    "end": 5
                },
                "right": {
                    "kind": 134299649,
                    "text": "right",
                    "rawText": "right",
                    "flags": 768,
                    "start": 5,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "left|right",
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

