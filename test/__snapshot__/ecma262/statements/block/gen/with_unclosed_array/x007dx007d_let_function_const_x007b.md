# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: }} let function const {
## Options

`````js
{}
`````
## Input

`````js
{[ }} let function const {
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
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 2
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 5,
            "end": 9
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 9,
                "end": 18
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
                "start": 18,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 18
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 18,
                "end": 24
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
                                "start": 26,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 26
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 24,
                        "end": 26
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 24,
                "end": 26
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 18,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "{[ }} let function const {",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 4
✖ Declaration or statement expected - start: 4, end: 5
✖ 'function' is not allowed here. Did you mean ';'? - start: 9, end: 18
✖ Binding identifier expected - start: 18, end: 24
✖ Missing an opening parentheses - '( - start: 19, end: 24
✖ The parser expected to find a '}' to match the '{' token here - start: 25, end: 26
✖ Missing initializer in const declaration - start: 26, end: 26

```

