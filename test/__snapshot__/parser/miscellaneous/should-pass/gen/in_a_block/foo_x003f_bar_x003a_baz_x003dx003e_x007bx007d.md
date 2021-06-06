# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: foo ? bar : baz => {}
## Input

`````js
{ foo ? bar : baz => {} }
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
                        "kind": 120,
                        "expression": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 1,
                                "end": 5
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 5,
                                "end": 7
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 7,
                                "end": 11
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 11,
                                "end": 13
                            },
                            "alternate": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 17,
                                    "end": 20
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 17
                                },
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "{ foo ? bar : baz => {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

{
  foo ? bar : baz =>  {};
}
```

### Diagnostics

```javascript
✔ No errors
```

