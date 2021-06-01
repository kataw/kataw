# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_stand_alone
> :: test: { stand alone
> :: case: import.call
## Input

`````js
{ import.call
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
                            "kind": 207,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 80,
                                "start": 1,
                                "end": 8
                            },
                            "metaIdentifier": null,
                            "flags": 8,
                            "start": 96,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 9
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "call",
                            "rawText": "call",
                            "flags": 96,
                            "start": 9,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 9,
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
    "source": "{ import.call",
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
✖ 'import.meta' is the only valid meta property for import - start: 9, end: 13

```

