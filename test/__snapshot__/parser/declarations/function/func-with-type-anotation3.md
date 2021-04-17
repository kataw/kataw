# Kataw parser test case

## Input

`````js
function foo(callback: (_1:bool, _2:string) => number){}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 768,
                            "start": 13,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 148,
                                "parameters": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "_1",
                                            "rawText": "_1",
                                            "flags": 768,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "bool",
                                                "rawText": "bool",
                                                "flags": 768,
                                                "start": 27,
                                                "end": 31
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 27,
                                            "end": 31
                                        },
                                        "flags": 0,
                                        "start": 24,
                                        "end": 31
                                    }
                                ],
                                "returnType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 16637,
                                        "text": "",
                                        "autofix": 0,
                                        "flags": 12,
                                        "start": 31,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 31,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 24,
                                "end": 31
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 31
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 13,
                        "end": 31
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "_2",
                            "rawText": "_2",
                            "flags": 768,
                            "start": 32,
                            "end": 35
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 768,
                                "start": 36,
                                "end": 42
                            },
                            "flags": 0,
                            "start": 35,
                            "end": 42
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 32,
                        "end": 42
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 12,
                "end": 43
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 43,
                    "end": 43
                },
                "flags": 256,
                "start": 43,
                "end": 43
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": "number",
                "flags": 768,
                "start": 46,
                "end": 53
            },
            "flags": 128,
            "start": 46,
            "end": 53
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 55,
                "end": 55
            },
            "flags": 128,
            "start": 54,
            "end": 56
        }
    ],
    "isModule": false,
    "text": "function foo(callback: (_1:bool, _2:string) => number){}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 31,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 43,
            "end": 46
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 43,
            "end": 46
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 43,
            "end": 46
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 53,
            "end": 54
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 53,
            "end": 54
        }
    ],
    "start": 0,
    "end": 56
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

