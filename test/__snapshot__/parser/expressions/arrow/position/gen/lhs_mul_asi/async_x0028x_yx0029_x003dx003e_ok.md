# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: lhs mul asi
> :: case: async (x, y) => ok
## Input

`````js
async (x, y) => ok
* x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 12,
                "end": 15
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 7,
                    "end": 8
                },
                {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 9,
                    "end": 11
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 768,
                    "start": 15,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 20,
                    "end": 22
                },
                "flags": 256,
                "start": 15,
                "end": 22
            },
            "flags": 2304,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "async (x, y) => ok\n* x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: lhs mul asi
> :: case: async (x, y) => ok
## Input

`````js
async (x, y) => ok
* x
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: lhs mul asi
> :: case: async (x, y) => ok
## Input

`````js
async (x, y) => ok
* x
`````
```

