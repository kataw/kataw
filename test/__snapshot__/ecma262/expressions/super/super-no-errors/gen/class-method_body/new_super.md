# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/super-no-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/super-no-errors/gen/class-method_body
> :: test: class-method body
> :: case: new super
## Options

`````js
{}
`````
## Input

`````js
class C { m() { new super; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "m",
                                    "rawText": "m",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 11
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 13
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 210,
                                                    "newKeyword": {
                                                        "kind": 138477661,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 15,
                                                        "end": 19
                                                    },
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 19,
                                                            "end": 25
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 25,
                                                            "end": 25
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 19,
                                                        "end": 25
                                                    },
                                                    "argumentList": null,
                                                    "flags": 96,
                                                    "transformFlags": 2048,
                                                    "start": 15,
                                                    "end": 25
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 15,
                                                "end": 26
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 28
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 28
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 28
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "class C { m() { new super; }",
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
✖ 'super' must be followed by an argument list or member access. - start: 19, end: 26
✖ Dot property must be an identifier - start: 25, end: 26
✖ The parser expected to find a '}' to match the '{' token here - start: 27, end: 28

```

