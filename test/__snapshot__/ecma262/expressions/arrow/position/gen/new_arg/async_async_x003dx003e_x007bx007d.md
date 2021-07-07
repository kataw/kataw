# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/new_arg
> :: test: new arg
> :: case: async async => {}
## Options

`````js
{}
`````
## Input

`````js
new async async => {}
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 9
                    },
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 15
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 18
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 20
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 21
                    },
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 21
                },
                "argumentList": null,
                "flags": 96,
                "transformFlags": 2048,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "new async async => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 9, end: 15

```

