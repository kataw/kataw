# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/obj
> :: test: obj
> :: case: async async => ok
## Options

`````js
{}
`````
## Input

`````js
x = {arrow: async async => ok}
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
                "kind": 125,
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
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "arrow",
                                    "rawText": "arrow",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 271,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 26
                                    },
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 29
                                    },
                                    "flags": 288,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 29
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 5,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 29
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 30
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "x = {arrow: async async => ok}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

x = {arrow: async async => ok};
```

### Diagnostics

```javascript
✔ No errors
```

