# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/gen/in_class
> :: test: in class
> :: case: { x: import.meta }
## Options

`````js
{}
`````
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 9
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 14
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 299,
                                "importKeyword": {
                                    "kind": 37814364,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 21
                                },
                                "metaIdentifier": {
                                    "kind": 16595,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 26
                                },
                                "flags": 21,
                                "transformFlags": 0,
                                "start": 96,
                                "end": 26
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 14,
                            "end": 26
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 26
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 11,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "class x { { x: import.meta } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 10, end: 11
✖ Cannot use 'import.meta' outside a module - start: 21, end: 28
✖ Declaration or statement expected - start: 28, end: 30

```

