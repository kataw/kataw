# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/gen/in_block
> :: test: in block
> :: case: { x: import.meta }
## Options

`````js
{}
`````
## Input

`````js
{ { x: import.meta } }
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
                                        "start": 3,
                                        "end": 5
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "statement": {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 299,
                                                "importKeyword": {
                                                    "kind": 37814364,
                                                    "flags": 64,
                                                    "start": 6,
                                                    "end": 13
                                                },
                                                "metaIdentifier": {
                                                    "kind": 16595,
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 18
                                                },
                                                "flags": 13,
                                                "start": 96,
                                                "end": 18
                                            },
                                            "flags": 16,
                                            "start": 13,
                                            "end": 18
                                        },
                                        "flags": 16,
                                        "start": 6,
                                        "end": 18
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 18
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 20
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "{ { x: import.meta } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 13, end: 20

```

