# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: await
>          x;
## Input

`````js
for (await
x; in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 165,
            "initializer": {
                "kind": 81921,
                "value": "await",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 10
            },
            "condition": {
                "kind": 198,
                "left": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 13,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 21006388,
                    "autofix": 0,
                    "flags": 0,
                    "start": 13,
                    "end": 16
                },
                "right": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 16,
                    "end": 18
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 18
            },
            "incrementor": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 12
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 19,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "for (await\nx; in x) ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 10,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 13,
            "end": 16
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: await
>          x;
## Input

`````js
for (await
x; in x) ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: await
>          x;
## Input

`````js
for (await
x; in x) ;
`````
```

