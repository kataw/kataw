# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: async (foo = yield x) => foo
## Input

`````js
{ async (foo = yield x) => foo }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 23,
                            "end": 26
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 12
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 9,
                                "end": 20
                            },
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 20,
                                "end": 22
                            }
                        ],
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 1,
                            "end": 7
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 26,
                            "end": 30
                        },
                        "flags": 290,
                        "start": 1,
                        "end": 30
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "{ async (foo = yield x) => foo }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

{
  async (foo = yield, x) =>  foo
}
```

### Diagnostics

```javascript
✔ No errors
```

