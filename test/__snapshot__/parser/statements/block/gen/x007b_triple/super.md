# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: super
## Input

`````js
{ { { super
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
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 5,
                                                            "end": 11
                                                        },
                                                        "flags": 96,
                                                        "start": 5,
                                                        "end": 11
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 64,
                                                        "start": 11,
                                                        "end": 11
                                                    },
                                                    "flags": 536870944,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 11
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 11
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 11
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "{ { { super",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 5, end: 11
✖ Dot property must be an identifier - start: 11, end: 11
✖ The parser expected to find a '}' to match the '{' token here - start: 11, end: 11

```

