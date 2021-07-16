# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/delete_paren_arg
> :: test: delete paren arg
> :: case: async async => ok
## Options

`````js
{}
`````
## Input

`````js
delete (async async => ok)
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
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 13
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 19
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 22
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 25
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 25
                    },
                    "flags": 6,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 26
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "delete (async async => ok)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
delete (async async => ok);
```

### Diagnostics

```javascript
✔ No errors
```

