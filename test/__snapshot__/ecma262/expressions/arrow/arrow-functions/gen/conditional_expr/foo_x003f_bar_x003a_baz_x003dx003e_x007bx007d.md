# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/arrow-functions/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/arrow-functions/gen/conditional_expr
> :: test: conditional expr
> :: case: foo ? bar : baz => {}
## Options

`````js
{}
`````
## Input

`````js
bar ? (foo ? bar : baz => {}) : baz;
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
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 7,
                            "end": 10
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 10,
                            "end": 12
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 12,
                            "end": 16
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 16,
                            "end": 18
                        },
                        "alternate": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 96,
                                "start": 18,
                                "end": 22
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 22,
                                "end": 25
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 25,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 28
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 29
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 29,
                    "end": 31
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "start": 31,
                    "end": 35
                },
                "flags": 32,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "bar ? (foo ? bar : baz => {}) : baz;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

bar ? (foo ? bar : baz =>  { }) : baz;

```

### Diagnostics

```javascript
✔ No errors
```

