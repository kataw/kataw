# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\unclosed_parens
> :: test: unclosed parens
> :: case: import.call
## Input

`````js
{( import.call
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
                                "kind": 120,
                                "expression": {
                                    "kind": 207,
                                    "importKeyword": {
                                        "kind": 37814364,
                                        "flags": 64,
                                        "start": 2,
                                        "end": 9
                                    },
                                    "metaIdentifier": null,
                                    "flags": 9,
                                    "start": 96,
                                    "end": 10
                                },
                                "flags": 16,
                                "start": 9,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 10
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 10
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "call",
                            "rawText": "call",
                            "flags": 96,
                            "start": 10,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 10,
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
    "source": "{( import.call",
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
✖ Cannot use 'import.meta' outside a module - start: 9, end: 14
✖ 'import.meta' is the only valid meta property for import - start: 9, end: 14

```

