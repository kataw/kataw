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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "text": "left",
                    "rawText": "left",
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "operatorToken": {
                    "kind": 33864,
                    "flags": 768,
                    "start": 4,
                    "end": 5
                },
                "right": {
                    "kind": 81921,
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
    "diagnostics": [],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

