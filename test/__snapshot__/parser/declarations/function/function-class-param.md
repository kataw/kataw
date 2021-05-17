# Kataw parser test case

## Input

`````js
function* foo(a = class {*bar() { yield b }}) {}
`````

## Output

### CST

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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 9,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 17,
                                "end": 23
                            },
                            "name": null,
                            "typeParameters": null,
                            "members": {
                                "kind": 277,
                                "classHeritage": null,
                                "elements": [
                                    {
                                        "kind": 278,
                                        "declareToken": null,
                                        "decorators": null,
                                        "generatorToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "staticKeyword": null,
                                        "asyncKeyword": null,
                                        "setKeyword": null,
                                        "getKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 26,
                                                "end": 29
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 30,
                                                "end": 31
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
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "start": 33,
                                                                "end": 39
                                                            },
                                                            "flags": 16,
                                                            "start": 33,
                                                            "end": 39
                                                        },
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 96,
                                                                "start": 39,
                                                                "end": 41
                                                            },
                                                            "flags": 16,
                                                            "start": 39,
                                                            "end": 41
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 33,
                                                    "end": 41
                                                },
                                                "flags": 32,
                                                "start": 31,
                                                "end": 43
                                            },
                                            "flags": 0,
                                            "start": 29,
                                            "end": 43
                                        },
                                        "flags": 0,
                                        "start": 25,
                                        "end": 43
                                    }
                                ],
                                "flags": 32,
                                "start": 25,
                                "end": 44
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 44
                        },
                        "flags": 34,
                        "start": 14,
                        "end": 44
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 13,
                "end": 45
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 47,
                    "end": 47
                },
                "flags": 32,
                "start": 45,
                "end": 48
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "function* foo(a = class {*bar() { yield b }}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 39, end: 41

```

