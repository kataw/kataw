# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/rhs_mul
> :: test: rhs mul
> :: case: async x => ok
## Options

`````js
{}
`````
## Input

`````js
x * async x => ok
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
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 14
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 17
                    },
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 3,
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
    "source": "x * async x => ok",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 9, end: 11

```

