# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: class x {}
## Options

`````js
{}
`````
## Input

`````js
do do do class x {} while while while
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
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "start": 2,
                    "end": 5
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "start": 5,
                        "end": 8
                    },
                    "statement": {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
                            "start": 8,
                            "end": 14
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 32,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 19
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 80,
                        "start": 19,
                        "end": 25
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 80,
                    "start": 5,
                    "end": 25
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "start": 25,
                    "end": 31
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 31,
                    "end": 31
                },
                "flags": 80,
                "start": 2,
                "end": 31
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 31,
                "end": 37
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 37,
                "end": 37
            },
            "flags": 80,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "do do do class x {} while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Class declarations cannot be used in a single-statement context - start: 8, end: 14
✖ Missing an opening parentheses - '( - start: 26, end: 31
✖ Missing an opening parentheses - '( - start: 32, end: 37

```

