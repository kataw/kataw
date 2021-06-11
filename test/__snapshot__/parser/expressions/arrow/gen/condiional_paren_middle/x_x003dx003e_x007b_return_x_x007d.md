# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/gen/condiional_paren_middle
> :: test: condiional_paren_middle
> :: case: x => { return x; }
## Options

`````js
{}
`````
## Input

`````js
bar ? (x => { return x; }) : baz;
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 8,
                            "end": 11
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 161,
                                        "returnKeyword": {
                                            "kind": 37757022,
                                            "flags": 80,
                                            "start": 13,
                                            "end": 20
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 22
                                        },
                                        "flags": 80,
                                        "start": 13,
                                        "end": 23
                                    }
                                ],
                                "flags": 32,
                                "start": 13,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 25
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 26
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 26,
                    "end": 28
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "start": 28,
                    "end": 32
                },
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "bar ? (x => { return x; }) : baz;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

bar ? (x =>  {
        return  x;
      }) : baz;
```

### Diagnostics

```javascript
✔ No errors
```

