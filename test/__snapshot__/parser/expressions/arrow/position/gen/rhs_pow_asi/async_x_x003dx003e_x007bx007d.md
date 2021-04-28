# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: rhs pow asi
> :: case: async x => {}
## Input

`````js
x
** async x => {}
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
                    "flags": 1,
                    "start": 513,
                    "end": 4
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 12,
                        "start": 0,
                        "end": 15
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 10,
                                "end": 12
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 256,
                            "start": 4,
                            "end": 12
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 4,
                        "start": 512,
                        "end": 10
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 17,
                            "end": 17
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 18
                    },
                    "flags": 2304,
                    "start": 4,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "x\n** async x => {}",
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
✔ No errors
```

