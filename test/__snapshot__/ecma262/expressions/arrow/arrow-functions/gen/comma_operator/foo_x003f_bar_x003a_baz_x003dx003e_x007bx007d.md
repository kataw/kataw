# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/arrow-functions/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/arrow-functions/gen/comma_operator
> :: test: comma operator
> :: case: foo ? bar : baz => {}
## Options

`````js
{}
`````
## Input

`````js
bar, foo ? bar : baz => {}
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 4,
                            "end": 8
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 8,
                            "end": 10
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 10,
                            "end": 14
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 14,
                            "end": 16
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
                                "start": 16,
                                "end": 20
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 20,
                                "end": 23
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 26
                        },
                        "flags": 32,
                        "start": 4,
                        "end": 26
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "bar, foo ? bar : baz => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

bar, foo ? bar : baz =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

