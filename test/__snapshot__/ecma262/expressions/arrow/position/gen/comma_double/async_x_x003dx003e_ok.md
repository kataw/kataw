# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/comma_double
> :: test: comma double
> :: case: async x => ok
## Options

`````js
{}
`````
## Input

`````js
async x => ok, async x => ok
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 7,
                            "end": 10
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "start": 10,
                            "end": 13
                        },
                        "flags": 288,
                        "start": 0,
                        "end": 13
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 14,
                            "end": 20
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 22,
                            "end": 25
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "start": 25,
                            "end": 28
                        },
                        "flags": 288,
                        "start": 14,
                        "end": 28
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "async x => ok, async x => ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

async x => ok, async x => ok;
```

### Diagnostics

```javascript
✔ No errors
```

