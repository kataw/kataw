# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: async a => {}
## Input

`````js
for (async a => {} in x) ;
`````

## Output

### Hybrid CST

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
                "start": 18,
                "end": 21
            },
            "kind": 166,
            "initializer": {
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 5,
                        "end": 12
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 5,
                    "end": 10
                },
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 18
                },
                "flags": 288,
                "start": 5,
                "end": 18
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 21,
                "end": 23
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 24,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for (async a => {} in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ An arrow function can not be part of an operator to the right - start: 18, end: 21
✖ Invalid left-hand side in for-in loop - start: 21, end: 23

```

