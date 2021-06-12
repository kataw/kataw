# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: (localVar |= defaultValue) => {}
## Input

`````js
{ (localVar |= defaultValue) => {} }
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
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "localVar",
                                    "rawText": "localVar",
                                    "flags": 96,
                                    "start": 3,
                                    "end": 11
                                },
                                "operatorToken": {
                                    "kind": 4136,
                                    "flags": 64,
                                    "start": 11,
                                    "end": 14
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "defaultValue",
                                    "rawText": "defaultValue",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "start": 31,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "{ (localVar |= defaultValue) => {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 28, end: 31
✖ Declaration or statement expected - start: 34, end: 36

```

