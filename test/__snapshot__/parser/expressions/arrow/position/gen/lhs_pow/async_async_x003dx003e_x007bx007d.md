# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: lhs pow
> :: case: async async => {}
## Input

`````js
async async => {} ** x
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 11,
                    "end": 14
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 81921,
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 5,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 0,
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
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 14,
                    "end": 17
                },
                "flags": 2304,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 17,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 768,
                    "start": 17,
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
                "start": 17,
                "end": 22
            },
            "flags": 128,
            "start": 17,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "async async => {} ** x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 28,
            "error": "An arrow function can not be part of an operator to the right",
            "start": 17,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 17,
            "end": 20
        }
    ],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: lhs pow
> :: case: async async => {}
## Input

`````js
async async => {} ** x
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: lhs pow
> :: case: async async => {}
## Input

`````js
async async => {} ** x
`````
```

