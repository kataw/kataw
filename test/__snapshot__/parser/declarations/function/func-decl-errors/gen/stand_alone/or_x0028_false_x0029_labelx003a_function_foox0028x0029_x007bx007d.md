# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\func-decl-errors\gen\stand_alone
> :: test: stand alone
> :: case: or (;false;) label: function foo() {}
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
                    "start": 0,
                    "end": 2
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 4,
                    "end": 4
                },
                "flags": 268435488,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "start": 5,
                "end": 10
            },
            "flags": 16,
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
                "start": 12,
                "end": 18
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
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
                    "start": 19,
                    "end": 28
                },
                "generatorToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 28,
                    "end": 32
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 32,
                    "end": 34
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 36,
                        "end": 36
                    },
                    "flags": 32,
                    "start": 34,
                    "end": 37
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 16,
                "start": 19,
                "end": 37
            },
            "flags": 16,
            "start": 12,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "or (;false;) label: function foo() {}",
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
✖ Expected a ')' to match the '(' token here - start: 4, end: 5
✖ Declaration or statement expected - start: 11, end: 12

```

