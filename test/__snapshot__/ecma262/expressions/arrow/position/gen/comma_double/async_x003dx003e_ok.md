# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/comma_double
> :: test: comma double
> :: case: async => ok
## Options

`````js
{}
`````
## Input

`````js
async => ok, async => ok
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
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 0,
                            "end": 5
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 5,
                            "end": 8
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "start": 8,
                            "end": 11
                        },
                        "flags": 288,
                        "start": 0,
                        "end": 11
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 12,
                            "end": 18
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 18,
                            "end": 21
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "start": 21,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 12,
                        "end": 24
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "async => ok, async => ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

async => ok, async => ok;
```

### Diagnostics

```javascript
✔ No errors
```

