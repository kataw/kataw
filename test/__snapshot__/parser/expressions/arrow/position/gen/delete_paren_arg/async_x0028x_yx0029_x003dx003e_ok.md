# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/delete_paren_arg
> :: test: delete paren arg
> :: case: async (x, y) => ok
## Options

`````js
{}
`````
## Input

`````js
delete (async (x, y) => ok)
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
                            "start": 20,
                            "end": 23
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 15,
                                "end": 16
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            }
                        ],
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
                            "start": 23,
                            "end": 26
                        },
                        "flags": 288,
                        "start": 8,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "delete (async (x, y) => ok)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

delete (async (x, y) =>  ok);
```

### Diagnostics

```javascript
✔ No errors
```

