# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: x in y
## Input

`````js
new x in y
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
                    "kind": 210,
                    "newKeyword": {
                        "kind": 4259933,
                        "flags": 768,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 81921,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 3,
                        "end": 5
                    },
                    "argumentList": null,
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 768,
                    "start": 5,
                    "end": 8
                },
                "right": {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 8,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "new x in y",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: x in y
## Input

`````js
new x in y
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: x in y
## Input

`````js
new x in y
`````
```

