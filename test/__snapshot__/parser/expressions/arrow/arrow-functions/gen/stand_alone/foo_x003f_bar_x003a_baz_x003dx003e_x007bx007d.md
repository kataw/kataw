# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/arrow/arrow-functions/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\arrow\arrow-functions\gen\stand_alone
> :: test: stand alone
> :: case: foo ? bar : baz => {}
## Input

`````js
foo ? bar : baz => {}
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
                    "text": "foo",
                    "rawText": "foo",
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
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 5,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 15,
                        "end": 18
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 11,
                        "end": 15
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
                            "start": 20,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 18,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "foo ? bar : baz => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

foo ? bar : baz =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

