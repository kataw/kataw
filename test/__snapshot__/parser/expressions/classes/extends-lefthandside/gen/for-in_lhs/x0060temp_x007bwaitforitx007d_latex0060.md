# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: s
> :: test: for-in lhs
> :: case: `temp {waitforit} late`
## Input

`````js
for (`temp {waitforit} late` in x) ;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 458761,
                "text": "temp {waitforit} late",
                "rawText": "temp {waitforit} late",
                "flags": 134217824,
                "start": 5,
                "end": 28
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 28,
                "end": 31
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 31,
                "end": 33
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 34,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "for (`temp {waitforit} late` in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

for (`temp {waitforit} late` in x);
```

### Diagnostics

```javascript
✔ No errors
```

