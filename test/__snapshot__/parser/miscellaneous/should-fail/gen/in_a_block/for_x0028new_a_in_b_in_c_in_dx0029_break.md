# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: k
> :: test: in a block
> :: case: for (new a in b in c in d) break
## Options

`````js
{}
`````
## Input

`````js
{ for (new a in b in c in d) break }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 166,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "start": 7,
                                "end": 10
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 10,
                                "end": 12
                            },
                            "argumentList": null,
                            "flags": 96,
                            "start": 7,
                            "end": 12
                        },
                        "inKeyword": {
                            "kind": 21006388,
                            "flags": 64,
                            "start": 12,
                            "end": 15
                        },
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 17
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 96,
                                    "start": 17,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 22
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 22
                            },
                            "operatorToken": {
                                "kind": 21006388,
                                "flags": 96,
                                "start": 22,
                                "end": 25
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 25,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 27
                        },
                        "statement": {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 80,
                                "start": 28,
                                "end": 34
                            },
                            "label": null,
                            "flags": 16,
                            "start": 28,
                            "end": 34
                        },
                        "flags": 80,
                        "start": 1,
                        "end": 34
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "{ for (new a in b in c in d) break }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 15, end: 17

```

