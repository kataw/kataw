# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: t
> :: test: assign to paren-wrapped keyword var in param default
> :: case: new
## Options

`````js
{}
`````
## Input

`````js
(x = (new) = f) => {}
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
                                    "kind": 210,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 96,
                                        "start": 6,
                                        "end": 9
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 9,
                                        "end": 9
                                    },
                                    "argumentList": null,
                                    "flags": 96,
                                    "start": 6,
                                    "end": 9
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 10
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 10,
                                "end": 12
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 14
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 14
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 15,
                    "end": 18
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 18,
                    "end": 21
                },
                "flags": 34,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "(x = (new) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 9, end: 10

```

