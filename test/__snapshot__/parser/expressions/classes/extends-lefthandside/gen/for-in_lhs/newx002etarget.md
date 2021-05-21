# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: s
> :: test: for-in lhs
> :: case: new.target
## Input

`````js
for (new.target in x) ;
`````
## Output

### CST

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
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 0,
                    "start": 5,
                    "end": 8
                },
                "targetIdentifier": {
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
    "source": "for (new.target in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 15, end: 18
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 18, end: 20

```

