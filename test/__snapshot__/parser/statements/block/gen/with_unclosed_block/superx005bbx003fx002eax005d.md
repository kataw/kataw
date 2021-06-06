# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/with_unclosed_block
> :: test: with unclosed block
> :: case: super[b?.a]
## Input

`````js
{ {} finally(x) { super[b?.a]
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 15
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 536871042,
                                        "member": {
                                            "kind": 225,
                                            "superKeyword": {
                                                "kind": 4259935,
                                                "flags": 96,
                                                "start": 17,
                                                "end": 23
                                            },
                                            "flags": 96,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "expression": {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "member": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 25
                                            },
                                            "chain": {
                                                "kind": 206,
                                                "chain": {
                                                    "kind": 536871114,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 27,
                                                        "end": 28
                                                    },
                                                    "flags": 32,
                                                    "start": 27,
                                                    "end": 28
                                                },
                                                "flags": 32,
                                                "start": 27,
                                                "end": 28
                                            },
                                            "flags": 32,
                                            "start": 24,
                                            "end": 28
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 29
                                    },
                                    "flags": 16,
                                    "start": 17,
                                    "end": 29
                                }
                            ],
                            "flags": 16,
                            "start": 17,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { super[b?.a]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 17, end: 24
✖ The parser expected to find a '}' to match the '{' token here - start: 29, end: 29

```

