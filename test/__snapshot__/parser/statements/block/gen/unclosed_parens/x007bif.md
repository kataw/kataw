# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\unclosed_parens
> :: test: unclosed parens
> :: case: {if
## Input

`````js
{( {if
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
                                "kind": 132,
                                "expressions": [],
                                "flags": 32,
                                "start": 1,
                                "end": 6
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 6
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 6
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "{( {if",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 6, end: 6
✖ ',' expected - start: 6, end: 6

```

