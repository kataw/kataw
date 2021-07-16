# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/class-constructor
> :: test: class-constructor
> :: case: var f = function { super(); }
## Options

`````js
{}
`````
## Input

`````js
class C { constructor() { var f = function { super(); } } }
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
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 29
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "f",
                                                                "rawText": "f",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 29,
                                                                "end": 31
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 177,
                                                                    "asyncKeyword": null,
                                                                    "functionKeyword": {
                                                                        "kind": 37822554,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 33,
                                                                        "end": 42
                                                                    },
                                                                    "asteriskToken": null,
                                                                    "name": null,
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [
                                                                            {
                                                                                "kind": 212,
                                                                                "propertyList": {
                                                                                    "kind": 213,
                                                                                    "properties": [
                                                                                        {
                                                                                            "kind": 329,
                                                                                            "key": {
                                                                                                "kind": 134299649,
                                                                                                "text": "super",
                                                                                                "rawText": "super",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 44,
                                                                                                "end": 50
                                                                                            },
                                                                                            "value": {
                                                                                                "kind": 16637,
                                                                                                "text": "",
                                                                                                "rawText": "",
                                                                                                "flags": 64,
                                                                                                "transformFlags": 0,
                                                                                                "start": 50,
                                                                                                "end": 50
                                                                                            },
                                                                                            "initializer": null,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 44,
                                                                                            "end": 50
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 44,
                                                                                    "end": 50
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 42,
                                                                                "end": 50
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 42,
                                                                        "end": 50
                                                                    },
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 50,
                                                                            "end": 50
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 50,
                                                                        "end": 50
                                                                    },
                                                                    "returnType": null,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 33,
                                                                    "end": 50
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 51,
                                                                    "end": 51
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 1,
                                                                "start": 33,
                                                                "end": 52
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4224,
                                                            "start": 29,
                                                            "end": 52
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 52
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 53
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 53
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 55
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 55
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 55
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 57
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "class C { constructor() { var f = function { super(); } } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 43, end: 44
✖ Object property expected - start: 50, end: 51
✖ ',' expected - start: 50, end: 51
✖ Declaration or statement expected - start: 57, end: 59

```

