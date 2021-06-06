# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: /* before */class /* a */ A /* b */ extends /* c */ class /* d */ B /* e */ { /* f */ } /* g */ { /* h */ }/* after */
## Input

`````js
{ /* before */class /* a */ A /* b */ extends /* c */ class /* d */ B /* e */ { /* f */ } /* g */ { /* h */ }/* after */ }
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
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
                            "start": 1,
                            "end": 19
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "start": 19,
                            "end": 29
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 80,
                                    "start": 29,
                                    "end": 45
                                },
                                "expression": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 64,
                                        "start": 45,
                                        "end": 59
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "start": 59,
                                        "end": 69
                                    },
                                    "typeParameters": null,
                                    "tail": {
                                        "kind": 277,
                                        "classHeritage": null,
                                        "body": {
                                            "kind": 262,
                                            "elements": [],
                                            "flags": 32,
                                            "start": 79,
                                            "end": 79
                                        },
                                        "flags": 69,
                                        "start": 32,
                                        "end": 89
                                    },
                                    "flags": 32,
                                    "start": 45,
                                    "end": 89
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "start": 45,
                                "end": 89
                            },
                            "body": {
                                "kind": 262,
                                "elements": [],
                                "flags": 32,
                                "start": 99,
                                "end": 99
                            },
                            "flags": 29,
                            "start": 32,
                            "end": 109
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 109
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 109
            },
            "flags": 16,
            "start": 0,
            "end": 122
        }
    ],
    "isModule": false,
    "source": "{ /* before */class /* a */ A /* b */ extends /* c */ class /* d */ B /* e */ { /* f */ } /* g */ { /* h */ }/* after */ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 122
}
```

### Printed

```javascript

{
  class /* a */ A /* b */   /* g */{} /* after */
}
```

### Diagnostics

```javascript
✔ No errors
```

