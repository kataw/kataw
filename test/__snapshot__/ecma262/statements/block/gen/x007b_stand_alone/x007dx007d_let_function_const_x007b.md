# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: }} let function const {
## Options

`````js
{}
`````
## Input

`````js
{ }} let function const {
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
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 1
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4,
            "end": 8
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 17
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
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 8,
            "end": 17
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 17,
                "end": 23
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
                                "start": 25,
                                "end": 25
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 23,
                        "end": 25
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 23,
                "end": 25
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 17,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "{ }} let function const {",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 3, end: 4
✖ 'function' is not allowed here. Did you mean ';'? - start: 8, end: 17
✖ Binding identifier expected - start: 17, end: 23
✖ Missing an opening parentheses - '( - start: 18, end: 23
✖ The parser expected to find a '}' to match the '{' token here - start: 24, end: 25
✖ Missing initializer in const declaration - start: 25, end: 25

```

