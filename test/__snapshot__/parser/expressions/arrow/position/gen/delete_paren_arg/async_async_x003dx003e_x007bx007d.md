# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\arrow\position\gen\delete_paren_arg
> :: test: delete paren arg
> :: case: async async => {}
## Input

`````js
delete (async async => {})
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 19,
                            "end": 22
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 13,
                            "end": 19
                        },
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 8,
                            "end": 13
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 25
                        },
                        "flags": 288,
                        "start": 8,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 26
                },
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
    "source": "delete (async async => {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

delete (async async =>  {});
```

### Diagnostics

```javascript
✔ No errors
```

