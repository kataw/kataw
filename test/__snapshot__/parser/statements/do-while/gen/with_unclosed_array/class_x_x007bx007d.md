# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: class x {}
## Options

`````js
{}
`````
## Input

`````js
do[ class x {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 14,
                "end": 14
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
                                    "start": 3,
                                    "end": 9
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 11
                                },
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 262,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 13,
                                        "end": 13
                                    },
                                    "flags": 11,
                                    "start": 32,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 3,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 14
                },
                "flags": 16,
                "start": 2,
                "end": 14
            },
            "flags": 80,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "do[ class x {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 14, end: 14

```

