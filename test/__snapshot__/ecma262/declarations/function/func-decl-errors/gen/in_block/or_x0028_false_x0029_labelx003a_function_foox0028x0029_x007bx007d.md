# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/gen/in_block
> :: test: in block
> :: case: or (;false;) label: function foo() {}
## Options

`````js
{}
`````
## Input

`````js
{or (;false;) label: function foo() {}}
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
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "or",
                                "rawText": "or",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 3
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 5
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 5
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 6
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 205586437,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 6,
                        "end": 12
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "label",
                "rawText": "label",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 20
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 29
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 33
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 34
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 37
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 38
                },
                "returnType": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 20,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "{or (;false;) label: function foo() {}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 5, end: 6
✖ The parser expected to find a '}' to match the '{' token here - start: 12, end: 13
✖ Declaration or statement expected - start: 38, end: 39

```

