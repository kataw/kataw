# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/let/let-sloppy-only/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\let-sloppy-only\gen\with_strict_directive
> :: test: with strict directive
> :: case: for (var let in {}) {}
## Input

`````js
"use strict"; for (var let in {}) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "start": 22,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 22,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 22,
                "end": 26
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 26,
                "end": 29
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 31,
                    "end": 31
                },
                "flags": 48,
                "start": 29,
                "end": 32
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 35,
                    "end": 35
                },
                "flags": 16,
                "start": 33,
                "end": 36
            },
            "flags": 16,
            "start": 13,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; for (var let in {}) {}",
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
✖ Identifier expected. Reserved word in strict mode - start: 22, end: 26

```

