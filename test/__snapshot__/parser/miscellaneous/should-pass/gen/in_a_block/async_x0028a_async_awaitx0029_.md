# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: async (a, async, await);
## Input

`````js
{ async (a, async, await); }
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
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 1,
                            "end": 7
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 10
                                },
                                {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 17
                                },
                                {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 24
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1,
                            "end": 1
                        },
                        "flags": 268435488,
                        "start": 1,
                        "end": 25
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "start": 25,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "{ async (a, async, await); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

{
  async(a, async, await)

}
```

### Diagnostics

```javascript
✔ No errors
```

