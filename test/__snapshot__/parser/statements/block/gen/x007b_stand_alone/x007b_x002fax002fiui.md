# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw7/test\__snapshot__\parser\statements\block\gen\x007b_stand_alone
> :: test: { stand alone
> :: case: { /a/iui
## Input

`````js
{ { /a/iui
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
                                    "kind": 120,
                                    "expression": {
                                        "kind": 221,
                                        "text": "/a/iui",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 10
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 10
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 10
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "{ { /a/iui",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate regular expression flag - start: 8, end: 9
✖ The parser expected to find a '}' to match the '{' token here - start: 10, end: 10

```

