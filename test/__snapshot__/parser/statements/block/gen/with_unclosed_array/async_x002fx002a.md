# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw7/test\__snapshot__\parser\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: async /*
## Input

`````js
{[ async /*
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
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "{[ async /*",
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
✖ Unexpected token. - start: 8, end: 12
✖ ',' expected - start: 8, end: 12

```

