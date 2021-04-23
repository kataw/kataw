# Kataw parser test case

## Input

`````js
class Foo {
  #x;
  constructor() {
    delete this?.#x;
  }
}
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 768,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#x",
                            "flags": 768,
                            "start": 11,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 11,
                        "end": 16
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 16,
                        "end": 17
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 17,
                                "end": 31
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 32,
                                "end": 33
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 4259886,
                                                    "flags": 768,
                                                    "start": 35,
                                                    "end": 46
                                                },
                                                "expression": {
                                                    "kind": 205,
                                                    "member": {
                                                        "kind": 135,
                                                        "flags": 768,
                                                        "start": 46,
                                                        "end": 51
                                                    },
                                                    "chain": {
                                                        "kind": 206,
                                                        "chain": {
                                                            "kind": 226,
                                                            "member": null,
                                                            "template": {
                                                                "kind": 227,
                                                                "spans": [
                                                                    {
                                                                        "kind": 228,
                                                                        "rawText": "this",
                                                                        "text": "#x",
                                                                        "expression": {
                                                                            "kind": 67109115,
                                                                            "text": "#x",
                                                                            "flags": 768,
                                                                            "start": 53,
                                                                            "end": 55
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 53,
                                                                        "end": 55
                                                                    }
                                                                ],
                                                                "tail": {
                                                                    "kind": 458761,
                                                                    "text": "\n  }\n}",
                                                                    "rawText": "this",
                                                                    "flags": 768,
                                                                    "start": 55,
                                                                    "end": 62
                                                                },
                                                                "flags": 256,
                                                                "start": 53,
                                                                "end": 62
                                                            },
                                                            "flags": 256,
                                                            "start": 53,
                                                            "end": 62
                                                        },
                                                        "flags": 256,
                                                        "start": 53,
                                                        "end": 62
                                                    },
                                                    "flags": 256,
                                                    "start": 46,
                                                    "end": 62
                                                },
                                                "flags": 256,
                                                "start": 35,
                                                "end": 62
                                            },
                                            "flags": 128,
                                            "start": 35,
                                            "end": 62
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 62
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 62
                            },
                            "flags": 0,
                            "start": 31,
                            "end": 62
                        },
                        "flags": 256,
                        "start": 17,
                        "end": 62
                    }
                ],
                "flags": 256,
                "start": 11,
                "end": 62
            },
            "flags": 128,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "class Foo {\n  #x;\n  constructor() {\n    delete this?.#x;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 70,
            "error": "Tagged template expressions are not permitted in an optional chain.",
            "start": 53,
            "end": 55
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 53,
            "end": 55
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55,
            "end": 62
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 62,
            "end": 62
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 62,
            "end": 62
        }
    ],
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

