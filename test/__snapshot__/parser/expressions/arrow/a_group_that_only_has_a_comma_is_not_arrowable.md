# Kataw parser test case

## Input

`````js
(,)=>x
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
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 1,
                            "end": 1
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 2,
                            "end": 2
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 6
            },
            "flags": 16,
            "start": 5,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "(,)=>x",
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
✖ Expression expected - start: 1, end: 2
✖ Expression expected - start: 2, end: 3
✖ Statement expected - start: 3, end: 5

```

