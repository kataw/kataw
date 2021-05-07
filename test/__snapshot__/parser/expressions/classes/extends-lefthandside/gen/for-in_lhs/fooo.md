# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: fooo
## Input

`````js
for (fooo in x) ;
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
                "start": 9,
                "end": 12
            },
            "kind": 166,
            "initializer": {
                "kind": 134299649,
                "text": "fooo",
                "rawText": "fooo",
                "flags": 96,
                "start": 5,
                "end": 9
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 12,
                "end": 14
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "for (fooo in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

for ( in x);
```

### Diagnostics

```javascript
✔ No errors
```

