# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/class-gen
> :: test: class-gen
> :: case: class C { get x) { super; } }
## Options

`````js
{}
`````
## Input

`````js
class C { *method() { class C { get x) { super; } } } }
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
                                                "kind": 178,
                                                "declareKeyword": null,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 27
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 29
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
                                                                "setKeyword": {
                                                                    "kind": 16498,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 31,
                                                                    "end": 35
                                                                },
                                                                "getKeyword": null,
                                                                "asteriskToken": null,
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 35,
                                                                        "end": 37
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 1024,
                                                                        "transformFlags": 0,
                                                                        "start": 37,
                                                                        "end": 37
                                                                    },
                                                                    "returnType": null,
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
                                                                        "start": 37,
                                                                        "end": 37
                                                                    },
                                                                    "flags": 1024,
                                                                    "transformFlags": 0,
                                                                    "start": 37,
                                                                    "end": 37
                                                                },
                                                                "flags": 1024,
                                                                "transformFlags": 0,
                                                                "start": 31,
                                                                "end": 37
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 31,
                                                        "end": 37
                                                    },
                                                    "flags": 29,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 37
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 37
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 37
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 37
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 37
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 37
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 4259935,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 46
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 46
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 40,
                            "end": 46
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 40,
                        "end": 47
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 40,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 38,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "class C { *method() { class C { get x) { super; } } } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Method definition expected - start: 37, end: 38
✖ 'super' must be followed by an argument list or member access. - start: 40, end: 47
✖ Dot property must be an identifier - start: 46, end: 47
✖ Declaration or statement expected - start: 49, end: 51
✖ Declaration or statement expected - start: 51, end: 53
✖ Declaration or statement expected - start: 53, end: 55

```

