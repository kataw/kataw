# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: d
- Path: e
> :: test: can not use keywords as label name
> :: case: const
## Input

`````js
const: x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [],
                "flags": 16777232,
                "start": 5,
                "end": 5
            },
            "flags": 33554448,
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
    "source": "const: x",
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
✖ Expected a `;` - start: 5, end: 6

```

