# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/class-gen
> :: test: class-gen
> :: case: var f = function { super(); }
## Options

`````js
{}
`````
## Input

`````js
class C { *method() { var f = function { super(); } } }
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
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 25
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
                                                                "start": 25,
                                                                "end": 27
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
                                                                        "start": 29,
                                                                        "end": 38
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
                                                                                                "start": 40,
                                                                                                "end": 46
                                                                                            },
                                                                                            "value": {
                                                                                                "kind": 16637,
                                                                                                "text": "",
                                                                                                "rawText": "",
                                                                                                "flags": 64,
                                                                                                "transformFlags": 0,
                                                                                                "start": 46,
                                                                                                "end": 46
                                                                                            },
                                                                                            "initializer": null,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 40,
                                                                                            "end": 46
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 40,
                                                                                    "end": 46
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 38,
                                                                                "end": 46
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 38,
                                                                        "end": 46
                                                                    },
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 46,
                                                                            "end": 46
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 46,
                                                                        "end": 46
                                                                    },
                                                                    "returnType": null,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 29,
                                                                    "end": 46
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 47,
                                                                    "end": 47
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 1,
                                                                "start": 29,
                                                                "end": 48
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4224,
                                                            "start": 25,
                                                            "end": 48
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 48
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 49
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 49
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 51
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 51
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 51
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 51
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "class C { *method() { var f = function { super(); } } }",
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
✖ Missing an opening parentheses - '( - start: 39, end: 40
✖ Object property expected - start: 46, end: 47
✖ ',' expected - start: 46, end: 47
✖ Declaration or statement expected - start: 53, end: 55

```

