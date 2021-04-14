# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: group rhs asi
> :: case: async (x, y) => ok
## Input

`````js
x *
(async (x, y) => ok)
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
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 17,
                            "end": 20
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 12,
                                "end": 13
                            },
                            {
                                "kind": 81921,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 14,
                                "end": 16
                            }
                        ],
                        "asyncToken": {
                            "kind": 82031,
                            "flags": 768,
                            "start": 5,
                            "end": 10
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 81921,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 768,
                            "start": 20,
                            "end": 23
                        },
                        "flags": 2304,
                        "start": 5,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "x *\n(async (x, y) => ok)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: group rhs asi
> :: case: async (x, y) => ok
## Input

`````js
x *
(async (x, y) => ok)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: group rhs asi
> :: case: async (x, y) => ok
## Input

`````js
x *
(async (x, y) => ok)
`````
```

