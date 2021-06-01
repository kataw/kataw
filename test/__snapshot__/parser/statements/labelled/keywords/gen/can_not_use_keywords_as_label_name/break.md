# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: d
- Path: e
> :: test: can not use keywords as label name
> :: case: break
## Input

`````js
break: x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 150,
            "breakKeyword": {
                "kind": 37757005,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 5,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 6,
                "end": 8
            },
            "flags": 16,
            "start": 6,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "break: x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 5, end: 6

```

