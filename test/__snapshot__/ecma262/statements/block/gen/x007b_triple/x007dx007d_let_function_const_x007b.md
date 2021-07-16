# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: }} let function const {
## Options

`````js
{}
`````
## Input

`````js
{ { { }} let function const {
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 7
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 8
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 8,
                        "end": 12
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 21
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
                            "start": 21,
                            "end": 21
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 21
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 21
                        },
                        "returnType": null,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 21
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 27
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "transformFlags": 4224,
                                    "start": 27,
                                    "end": 29
                                }
                            ],
                            "flags": 16777232,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 29
                        },
                        "flags": 33554448,
                        "transformFlags": 0,
                        "start": 21,
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
    "source": "{ { { }} let function const {",
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
✖ '; ' expected - start: 12, end: 21
✖ Binding identifier expected - start: 21, end: 27
✖ Missing an opening parentheses - '( - start: 22, end: 27
✖ The parser expected to find a '}' to match the '{' token here - start: 28, end: 29
✖ Missing initializer in const declaration - start: 29, end: 29

```

