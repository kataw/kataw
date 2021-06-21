# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: t
> :: test: assign to paren-wrapped keyword in arrow param default
> :: case: protected
## Options

`````js
{}
`````
## Input

`````js
(x = (protected) = f) => {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
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
                            "start": 1,
                            "end": 2
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 125,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "protected",
                                    "rawText": "protected",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 16
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 18,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 20
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 21,
                    "end": 24
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 27
                },
                "flags": 34,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "(x = (protected) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

 (x = (protected)=f) => {
}; 
```

### Diagnostics

```javascript
✔ No errors
```

