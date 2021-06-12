# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\unclosed_parens
> :: test: unclosed parens
> :: case: class x {}
## Input

`````js
{( class x {}
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
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 8
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 262,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 12,
                                        "end": 12
                                    },
                                    "flags": 10,
                                    "start": 32,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "{( class x {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 13, end: 13

```

