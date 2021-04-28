# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: c\u006fnst
## Input

`````js
c\u006fnst = x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 327680,
                "end": 10
            },
            "binding": {
                "kind": 151,
                "bindingList": [],
                "flags": 160,
                "start": 10,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 12,
                "end": 14
            },
            "flags": 128,
            "start": 12,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "c\\u006fnst = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 10, end: 12

```

