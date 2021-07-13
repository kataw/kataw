# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: abstract class function !!
## Options

`````js
{}
`````
## Input

`````js
{ abstract class function !!
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
                            "kind": 134299649,
                            "text": "abstract",
                            "rawText": "abstract",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 10
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 10
                    },
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 16
                        },
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 16,
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
                                "transformFlags": 0,
                                "start": 16,
                                "end": 16
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 16
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 16
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 25
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
                            "start": 25,
                            "end": 25
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 25
                        },
                        "returnType": null,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 25
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 27
                            },
                            "operand": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 28
                                },
                                "operand": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 27,
                                "end": 28
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 25,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 25,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "{ abstract class function !!",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 10, end: 16
✖ Binding identifier expected - start: 16, end: 25
✖ Binding identifier expected - start: 25, end: 27
✖ Missing an opening parentheses - '( - start: 26, end: 27
✖ Identifier expected - start: 28, end: 28

```

