# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/gen/strict_directive
> :: test: strict directive
> :: case: { x: import.meta }
## Options

`````js
{}
`````
## Input

`````js
"use strict"; { x: import.meta }
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
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 17,
                            "end": 18
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 299,
                                "importKeyword": {
                                    "kind": 37814364,
                                    "flags": 64,
                                    "start": 18,
                                    "end": 25
                                },
                                "metaIdentifier": {
                                    "kind": 16595,
                                    "flags": 96,
                                    "start": 26,
                                    "end": 30
                                },
                                "flags": 25,
                                "start": 96,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 18,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 30
                    }
                ],
                "flags": 16,
                "start": 15,
                "end": 30
            },
            "flags": 16,
            "start": 13,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; { x: import.meta }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 25, end: 32

```

