# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/class-constructor
> :: test: class-constructor
> :: case: new super();
## Options

`````js
{}
`````
## Input

`````js
class C { constructor() { new super(); } }
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 23
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
                                                        "start": 25,
                                                        "end": 29
                                                    },
                                                    "expression": {
                                                        "kind": 4259935,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 29,
                                                        "end": 35
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 36
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2048,
                                                    "start": 25,
                                                    "end": 37
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 25,
                                                "end": 38
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 40
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 40
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 40
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "class C { constructor() { new super(); } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 29, end: 36

```

