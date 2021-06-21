# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: t
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((false) = f)) => {}
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
                                        "kind": 205586437,
                                        "flags": 96,
                                        "start": 20,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 31
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 31
                }
            ],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 32,
                "end": 35
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 37,
                    "end": 37
                },
                "flags": 32,
                "start": 35,
                "end": 38
            },
            "flags": 290,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((false) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
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

