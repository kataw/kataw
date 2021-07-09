# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/comma_double
> :: test: comma double
> :: case: async (x, y) => ok
## Options

`````js
{}
`````
## Input

`````js
async (x, y) => ok, async (x, y) => ok
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
                            "transformFlags": 0,
                            "start": 0,
                            "end": 5
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 8
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 11
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 12
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 15
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 18
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 18
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 25
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 28
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 31
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 32
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 35
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 38
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 38
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "async (x, y) => ok, async (x, y) => ok",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
async (x, y) => ok, async (x, y) => ok;
```

### Diagnostics

```javascript
✔ No errors
```

