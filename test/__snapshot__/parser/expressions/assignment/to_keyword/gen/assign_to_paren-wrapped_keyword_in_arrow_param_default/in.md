# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: t
> :: test: assign to paren-wrapped keyword in arrow param default
> :: case: in
## Options

`````js
{}
`````
## Input

`````js
(x = (in) = f) => {}
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
                                    "kind": 198,
                                    "left": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 6,
                                        "end": 6
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "right": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 8,
                                        "end": 8
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 8
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 9
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 9,
                                "end": 11
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 11,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 13
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 14,
                    "end": 17
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 17,
                    "end": 20
                },
                "flags": 34,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "(x = (in) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 8
✖ Identifier expected - start: 8, end: 9

```

