# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/obj
> :: test: obj
> :: case: async x => {}
## Options

`````js
{}
`````
## Input

`````js
x = {arrow: async x => {}}
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 17,
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
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 25
                                    },
                                    "flags": 288,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 25
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 5,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 25
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 26
                },
                "flags": 0,
                "transformFlags": 128,
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
    "source": "x = {arrow: async x => {}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
x = { arrow: async x => {} };
```

### Diagnostics

```javascript
✔ No errors
```

