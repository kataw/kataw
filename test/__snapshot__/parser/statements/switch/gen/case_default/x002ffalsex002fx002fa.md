# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: /false//a
## Input

`````js
case /false//a default
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
                    "kind": 221,
                    "text": "/false/",
                    "flags": 96,
                    "start": 4,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 12,
                    "end": 13
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 13,
                    "end": 14
                },
                "flags": 32,
                "start": 4,
                "end": 14
            },
            "flags": 16,
            "start": 4,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "case /false//a default",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 0, end: 4
✖ Statement expected - start: 14, end: 22

```

