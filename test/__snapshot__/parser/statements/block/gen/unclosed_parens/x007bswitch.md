# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\unclosed_parens
> :: test: unclosed parens
> :: case: {switch
## Input

`````js
{( {switch
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
                                "end": 10
                            },
                            "flags": 32,
                            "start": 1,
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
    "source": "{( {switch",
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
✖ Property definition expected. Did you mean to use a ':'? - start: 10, end: 10
✖ ',' expected - start: 10, end: 10

```

