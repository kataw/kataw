# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator-errors\gen\declaration
> :: test: declaration
> :: case: var {foo: await} = {a: 42};
## Input

`````js
async function * gen() {var {foo: await} = {a: 42};}

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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 22
            },
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
                                "start": 24,
                                "end": 27
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 204,
                                                        "ellipsisToken": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 29,
                                                            "end": 32
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "await",
                                                            "rawText": "await",
                                                            "flags": 96,
                                                            "start": 33,
                                                            "end": 39
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 29,
                                                        "end": 39
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 29,
                                                "end": 39
                                            },
                                            "flags": 32,
                                            "start": 27,
                                            "end": 40
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 44,
                                                            "end": 45
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 42,
                                                            "rawText": "42",
                                                            "flags": 96,
                                                            "start": 46,
                                                            "end": 49
                                                        },
                                                        "flags": 32,
                                                        "start": 44,
                                                        "end": 49
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 44,
                                                "end": 49
                                            },
                                            "flags": 48,
                                            "start": 42,
                                            "end": 50
                                        },
                                        "flags": 16,
                                        "start": 27,
                                        "end": 50
                                    }
                                ],
                                "flags": 16,
                                "start": 27,
                                "end": 50
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 51
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 51
                },
                "flags": 32,
                "start": 22,
                "end": 52
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "async function * gen() {var {foo: await} = {a: 42};}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 33, end: 39

```

