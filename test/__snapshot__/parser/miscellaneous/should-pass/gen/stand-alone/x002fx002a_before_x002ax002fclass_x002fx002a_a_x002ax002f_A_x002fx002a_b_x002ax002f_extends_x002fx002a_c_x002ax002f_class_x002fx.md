# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: /* before */class /* a */ A /* b */ extends /* c */ class /* d */ B /* e */ { /* f */ } /* g */ { /* h */ }/* after */
## Input

`````js
/* before */class /* a */ A /* b */ extends /* c */ class /* d */ B /* e */ { /* f */ } /* g */ { /* h */ }/* after */
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 17
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 17,
                "end": 27
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 27,
                        "end": 43
                    },
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "start": 43,
                            "end": 57
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "B",
                            "rawText": "B",
                            "flags": 96,
                            "start": 57,
                            "end": 67
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 262,
                                "elements": [],
                                "flags": 32,
                                "start": 77,
                                "end": 77
                            },
                            "flags": 67,
                            "start": 32,
                            "end": 87
                        },
                        "flags": 32,
                        "start": 43,
                        "end": 87
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 43,
                    "end": 87
                },
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 97,
                    "end": 97
                },
                "flags": 27,
                "start": 32,
                "end": 107
            },
            "flags": 16,
            "start": 0,
            "end": 107
        }
    ],
    "isModule": false,
    "source": "/* before */class /* a */ A /* b */ extends /* c */ class /* d */ B /* e */ { /* f */ } /* g */ { /* h */ }/* after */",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 118
}
```

### Printed

```javascript
/* before */
class /* a */ A /* b */   /* g */{} /* after */
```

### Diagnostics

```javascript
✔ No errors
```

