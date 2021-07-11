# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: abstract class function !!
## Options

`````js
{}
`````
## Input

`````js
{[ abstract class function !!
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "abstract",
                                        "rawText": "abstract",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 11
                                    },
                                    {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "name": null,
                                        "typeParameters": null,
                                        "tail": {
                                            "kind": 277,
                                            "classHeritage": null,
                                            "body": {
                                                "kind": 303,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 17,
                                                "end": 17
                                            },
                                            "flags": 17,
                                            "start": 32,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 17
                                    },
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 17,
                                            "end": 26
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 26,
                                            "end": 26
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 26,
                                                "end": 26
                                            },
                                            "flags": 32,
                                            "start": 26,
                                            "end": 26
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "start": 17,
                                        "end": 26
                                    },
                                    {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 65584,
                                            "flags": 96,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "operand": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "flags": 96,
                                                "start": 28,
                                                "end": 29
                                            },
                                            "operand": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 29,
                                                "end": 29
                                            },
                                            "flags": 32,
                                            "start": 28,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 26,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "{[ abstract class function !!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 12, end: 17
✖ Missing an opening brace - '{ - start: 18, end: 26
✖ Missing an opening parentheses - '( - start: 27, end: 28
✖ Identifier expected - start: 29, end: 29

```

