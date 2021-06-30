# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: super[b?.a]
## Options

`````js
{}
`````
## Input

`````js
{[ super[b?.a]
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
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 130,
                                        "member": {
                                            "kind": 4259935,
                                            "flags": 96,
                                            "start": 2,
                                            "end": 8
                                        },
                                        "expression": {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "member": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 202,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "flags": 536870944,
                                                    "start": 12,
                                                    "end": 13
                                                },
                                                "flags": 32,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 13
                                        },
                                        "flags": 536870944,
                                        "start": 2,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "{[ super[b?.a]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 2, end: 9
✖ ',' expected - start: 13, end: 14

```

