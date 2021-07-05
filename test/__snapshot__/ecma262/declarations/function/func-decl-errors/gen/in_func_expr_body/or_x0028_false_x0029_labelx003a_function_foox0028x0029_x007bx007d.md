# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/gen/in_func_expr_body
> :: test: in func expr body
> :: case: or (;false;) label: function foo() {}
## Options

`````js
{}
`````
## Input

`````js
(function() {or (;false;) label: function foo() {}})()
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
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 1,
                        "end": 9
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 10,
                        "end": 10
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
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
                                            "start": 13,
                                            "end": 15
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "flags": 268435488,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "flags": 16,
                                    "start": 13,
                                    "end": 18
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "start": 18,
                                        "end": 23
                                    },
                                    "flags": 16,
                                    "start": 18,
                                    "end": 24
                                }
                            ],
                            "flags": 32,
                            "start": 13,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 24
                    },
                    "returnType": null,
                    "flags": 32,
                    "start": 1,
                    "end": 24
                },
                "flags": 0,
                "start": 32,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "label",
                "rawText": "label",
                "flags": 96,
                "start": 25,
                "end": 31
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 31,
                "end": 32
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 32,
                    "end": 41
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 41,
                    "end": 45
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 46,
                    "end": 46
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 49,
                        "end": 49
                    },
                    "flags": 32,
                    "start": 47,
                    "end": 50
                },
                "returnType": null,
                "flags": 16,
                "start": 32,
                "end": 50
            },
            "flags": 16,
            "start": 25,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 52,
                "end": 52
            },
            "flags": 16,
            "start": 52,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "(function() {or (;false;) label: function foo() {}})()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 17, end: 18
✖ The parser expected to find a '}' to match the '{' token here - start: 24, end: 25
✖ Expected a `;` - start: 25, end: 31
✖ Declaration or statement expected - start: 50, end: 51
✖ Declaration or statement expected - start: 51, end: 52
✖ Expression expected - start: 54, end: 54

```

