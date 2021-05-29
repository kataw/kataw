# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: s
> :: test: for-in lhs
> :: case: yield
>          x
## Input

`````js
for (yield
x in x) ;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 5,
                "end": 10
            },
            "condition": null,
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 64,
                    "start": 12,
                    "end": 15
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "flags": 32,
                "start": 10,
                "end": 17
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 18,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "for (yield\nx in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

for (yield; ; x in x);
```

### Diagnostics

```javascript
✔ No errors
```

