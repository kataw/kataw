# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: abstract class function !!
## Options

`````js
{}
`````
## Input

`````js
{( abstract class function !!
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
                                "kind": 132,
                                "expressions": [],
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 1,
                                "end": 11
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 11
                    },
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 17
                        },
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 17
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
                                "start": 17,
                                "end": 17
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 17
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 17
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
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
                            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 26
                        },
                        "returnType": null,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 26
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 28
                            },
                            "operand": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 29
                                },
                                "operand": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 32,
                                "transformFlags": 16384,
                                "start": 28,
                                "end": 29
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 26,
                            "end": 29
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 26,
                        "end": 29
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "{( abstract class function !!",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 12, end: 17
✖ Binding identifier expected - start: 17, end: 26
✖ Binding identifier expected - start: 26, end: 28
✖ Missing an opening parentheses - '( - start: 27, end: 28
✖ Identifier expected - start: 29, end: 29

```

