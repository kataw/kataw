# Kataw parser test case

## Input

`````js
""/x
""
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
                    "kind": 201392131,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 0,
                    "end": 2
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 2,
                    "start": 512,
                    "end": 3
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 3,
                    "end": 4
                },
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
                "kind": 201392131,
                "text": "",
                "rawText": "",
                "flags": 769,
                "start": 4,
                "end": 7
            },
            "flags": 128,
            "start": 4,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "\"\"/x\n\"\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
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

