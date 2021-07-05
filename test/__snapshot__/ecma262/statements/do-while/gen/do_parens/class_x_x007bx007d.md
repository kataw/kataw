# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: class x {}
## Options

`````js
{}
`````
## Input

`````js
do( class x {} while
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
            "statement": {
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
                                "kind": 303,
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
                    },
                    "flags": 2,
                    "start": 32,
                    "end": 14
                },
                "flags": 16,
                "start": 2,
                "end": 14
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 14,
                "end": 20
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 20,
                "end": 20
            },
            "flags": 80,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "do( class x {} while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 15, end: 20

```

