# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/comma_lhs
> :: test: comma lhs
> :: case: async async => ok
## Options

`````js
{}
`````
## Input

`````js
async async => ok, a
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 0,
                            "end": 5
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 5,
                            "end": 11
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 11,
                            "end": 14
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "start": 14,
                            "end": 17
                        },
                        "flags": 288,
                        "start": 0,
                        "end": 17
                    },
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    }
                ],
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
    "source": "async async => ok, a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

async async => ok, a;
```

### Diagnostics

```javascript
✔ No errors
```

