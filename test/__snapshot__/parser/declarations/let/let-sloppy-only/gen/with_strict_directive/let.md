# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/declarations/let/let-sloppy-only/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/let-sloppy-only/gen/with_strict_directive
> :: test: with strict directive
> :: case: let
## Input

`````js
"use strict"; let
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
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 96,
                "start": 13,
                "end": 17
            },
            "flags": 16,
            "start": 13,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; let",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. 'let' is a reserved word in strict mode - start: 17, end: 17

```

