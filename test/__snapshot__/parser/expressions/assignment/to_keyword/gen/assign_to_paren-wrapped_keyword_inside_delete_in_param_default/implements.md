# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: t
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: implements
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((implements) = f)) => {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 281,
                    "ellipsisToken": null,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "optionalToken": null,
                    "type": null,
                    "right": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 4259886,
                            "flags": 96,
                            "start": 10,
                            "end": 17
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "implements",
                                        "rawText": "implements",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 31
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 31,
                                    "end": 33
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 35
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 36
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 36
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 36
                }
            ],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 37,
                "end": 40
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 42,
                    "end": 42
                },
                "flags": 32,
                "start": 40,
                "end": 43
            },
            "flags": 290,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((implements) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

 (x = ) => {
} 
```

### Diagnostics

```javascript
✔ No errors
```

