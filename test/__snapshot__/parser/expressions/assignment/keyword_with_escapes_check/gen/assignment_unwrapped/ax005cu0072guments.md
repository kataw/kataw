# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: a\u0072guments
## Input

`````js
a\u0072guments = x;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "arguments",
                    "rawText": "a\\u0072guments",
                    "flags": 96,
                    "start": 0,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 14,
                    "end": 16
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 16,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "a\\u0072guments = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

arguments = x;
```

### Diagnostics

```javascript
✔ No errors
```

