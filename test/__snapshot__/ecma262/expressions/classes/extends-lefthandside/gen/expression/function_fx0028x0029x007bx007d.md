# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/expression
> :: test: expression
> :: case: function f(){}
## Options

`````js
{}
`````
## Input

`````js
(class B extends function f(){} {})
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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 8,
                                "end": 16
                            },
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 25
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 27
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 28,
                                    "end": 28
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 30,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 31
                                },
                                "returnType": null,
                                "flags": 32,
                                "start": 16,
                                "end": 31
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 16,
                            "end": 31
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 33,
                            "end": 33
                        },
                        "flags": 8,
                        "start": 32,
                        "end": 34
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 34
                },
                "flags": 0,
                "start": 32,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "(class B extends function f(){} {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

(class B  extends function f() {} {});
```

### Diagnostics

```javascript
✔ No errors
```

