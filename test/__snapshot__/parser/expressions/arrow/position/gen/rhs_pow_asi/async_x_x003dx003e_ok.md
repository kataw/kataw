# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: rhs pow asi
> :: case: async x => ok
## Input

`````js
x
** async x => ok
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
                    "original": "x",
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 65,
                    "start": 1,
                    "end": 4
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 12,
                        "end": 15
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "original": "x",
                                "text": "x",
                                "rawText": " x",
                                "flags": 96,
                                "start": 10,
                                "end": 12
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 4,
                            "end": 12
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 4,
                        "end": 10
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "original": "ok",
                        "text": "ok",
                        "rawText": " ok",
                        "flags": 96,
                        "start": 15,
                        "end": 18
                    },
                    "flags": 288,
                    "start": 4,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "x\n** async x => ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 10, end: 12

```

