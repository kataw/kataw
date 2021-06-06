# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\arrow\position\gen\delete_paren_arg
> :: test: delete paren arg
> :: case: async => ok
## Input

`````js
delete (async => ok)
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
                            "start": 13,
                            "end": 16
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 8,
                            "end": 13
                        },
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 8,
                            "end": 13
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "delete (async => ok)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

delete (async async =>  ok);
```

### Diagnostics

```javascript
✔ No errors
```

