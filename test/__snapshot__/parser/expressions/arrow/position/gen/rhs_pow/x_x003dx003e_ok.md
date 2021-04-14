# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: rhs pow
> :: case: x => ok
## Input

`````js
x ** x => ok
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 768,
                    "start": 1,
                    "end": 4
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 6,
                        "end": 9
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 4,
                        "end": 6
                    },
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 768,
                        "start": 9,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 4,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "x ** x => ok",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: rhs pow
> :: case: x => ok
## Input

`````js
x ** x => ok
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: rhs pow
> :: case: x => ok
## Input

`````js
x ** x => ok
`````
```

