# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: import.call
## Input

`````js
{[ import.call
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
                                    {
                                        "kind": 134299649,
                                        "text": "call",
                                        "rawText": "call",
                                        "flags": 96,
                                        "start": 10,
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
    "source": "{[ import.call",
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
✖ 'import.meta' is the only valid meta property for import - start: 10, end: 14

```

