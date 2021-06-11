# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: async (foo ? bar : baz) => {}
## Options

`````js
{}
`````
## Input

`````js
{ async (foo ? bar : baz) => {} }
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
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 12
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 18
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 18,
                                        "end": 20
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "baz",
                                        "rawText": "baz",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 9,
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
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 30,
                "end": 30
            },
            "flags": 16,
            "start": 28,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "{ async (foo ? bar : baz) => {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 25, end: 28
✖ Declaration or statement expected - start: 31, end: 33

```

