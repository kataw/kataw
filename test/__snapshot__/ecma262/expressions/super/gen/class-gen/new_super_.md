# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/class-gen
> :: test: class-gen
> :: case: new super;
## Options

`````js
{}
`````
## Input

`````js
class C { *method() { new super; } }
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
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 19
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
                                                        "start": 21,
                                                        "end": 25
                                                    },
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 25,
                                                            "end": 31
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 31,
                                                            "end": 31
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 25,
                                                        "end": 31
                                                    },
                                                    "argumentList": null,
                                                    "flags": 96,
                                                    "transformFlags": 2048,
                                                    "start": 21,
                                                    "end": 31
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 21,
                                                "end": 32
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 34
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 34
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 34
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "class C { *method() { new super; } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 25, end: 32
✖ Dot property must be an identifier - start: 31, end: 32

```

