# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: d
- Path: e
> :: test: can not use keywords as label name
> :: case: enum
## Input

`````js
enum: x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "enum",
                "rawText": "enum",
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 4,
                "end": 5
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "flags": 16,
                "start": 5,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "enum: x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

enum: x;
```

### Diagnostics

```javascript
✔ No errors
```

