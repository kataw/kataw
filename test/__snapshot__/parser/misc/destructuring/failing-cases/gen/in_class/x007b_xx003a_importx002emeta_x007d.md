# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/misc/destructuring/failing-cases/autogen.md
- Path: kataw7/test\__snapshot__\parser\misc\destructuring\failing-cases\gen\in_class
> :: test: in class
> :: case: { x: import.meta }
## Input

`````js
class x { { x: import.meta } }
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
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 9,
                    "end": 9
                },
                "flags": 7,
                "start": 32,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
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
                            "start": 11,
                            "end": 13
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 13,
                            "end": 14
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 120,
                                "expression": {
                                    "kind": 207,
                                    "importKeyword": {
                                        "kind": 37814364,
                                        "flags": 64,
                                        "start": 14,
                                        "end": 21
                                    },
                                    "metaIdentifier": {
                                        "kind": 16595,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 26
                                    },
                                    "flags": 21,
                                    "start": 96,
                                    "end": 26
                                },
                                "flags": 16,
                                "start": 21,
                                "end": 26
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 11,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 26
            },
            "flags": 16,
            "start": 9,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "class x { { x: import.meta } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 9, end: 11
✖ Cannot use 'import.meta' outside a module - start: 26, end: 28
✖ Declaration or statement expected - start: 28, end: 30

```

