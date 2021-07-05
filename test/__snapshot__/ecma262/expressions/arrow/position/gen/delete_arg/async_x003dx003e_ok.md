# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/delete_arg
> :: test: delete arg
> :: case: async => ok
## Options

`````js
{}
`````
## Input

`````js
delete async => ok
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
                    "flags": 96,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 6,
                        "end": 12
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 12,
                        "end": 15
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 96,
                        "start": 15,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "delete async => ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

delete async => ok;
```

### Diagnostics

```javascript
✔ No errors
```

