# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: new.target
## Input

`````js
for (new.target in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 15,
                "end": 18
            },
            "kind": 166,
            "initializer": {
                "kind": 211,
                "targetKeyword": {
                    "kind": 16594,
                    "flags": 0,
                    "start": 9,
                    "end": 15
                },
                "flags": 96,
                "start": 5,
                "end": 15
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 18,
                "end": 20
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 21,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "for (new.target in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 15, end: 18
✖ Invalid left-hand side in for-in loop - start: 18, end: 20

```

