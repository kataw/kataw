# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: t
> :: test: assign to paren-wrapped VALUE var inside delete in param default
> :: case: instanceof
## Options

`````js
{}
`````
## Input

`````js
(x = delete ((instanceof) = f)) => {}
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
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "start": 4,
                                "end": 11
                            },
                            "operand": {
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "operatorToken": {
                                                "kind": 4229173,
                                                "flags": 96,
                                                "start": 14,
                                                "end": 24
                                            },
                                            "right": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 24,
                                                "end": 24
                                            },
                                            "flags": 32,
                                            "start": 14,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 13,
                                        "end": 25
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 13,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 30
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 31,
                    "end": 34
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 36,
                        "end": 36
                    },
                    "flags": 32,
                    "start": 34,
                    "end": 37
                },
                "flags": 34,
                "start": 0,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "(x = delete ((instanceof) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 24
✖ Identifier expected - start: 24, end: 25

```

