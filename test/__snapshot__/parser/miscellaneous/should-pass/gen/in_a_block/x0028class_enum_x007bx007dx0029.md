# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: (class enum {})
## Input

`````js
{ (class enum {}) }
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
                                    "start": 3,
                                    "end": 8
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "enum",
                                    "rawText": "enum",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 13
                                },
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 262,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "flags": 13,
                                    "start": 32,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "{ (class enum {}) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

{
  (class enum {});
}
```

### Diagnostics

```javascript
✔ No errors
```

