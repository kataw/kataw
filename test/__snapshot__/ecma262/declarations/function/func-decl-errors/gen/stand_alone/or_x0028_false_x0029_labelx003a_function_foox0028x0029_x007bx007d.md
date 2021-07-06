# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/gen/stand_alone
> :: test: stand alone
> :: case: or (;false;) label: function foo() {}
## Options

`````js
{}
`````
## Input

`````js
or (;false;) label: function foo() {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                    "start": 0,
                    "end": 2
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 4
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 5,
            "end": 11
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "label",
                "rawText": "label",
                "flags": 96,
                "transformFlags": 0,
                "start": 12,
                "end": 18
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 18,
                "end": 19
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 28
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 32
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 33
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 36
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 37
                },
                "returnType": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 19,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 12,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "or (;false;) label: function foo() {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 4, end: 5
✖ Declaration or statement expected - start: 11, end: 12

```

