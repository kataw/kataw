# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/group_rhs_asi
> :: test: group rhs asi
> :: case: async => ok
## Options

`````js
{}
`````
## Input

`````js
x *
(async => ok)
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 13
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 16
                    },
                    "flags": 3,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 17
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "x *\n(async => ok)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
x * (async => ok);
```

### Diagnostics

```javascript
✔ No errors
```

