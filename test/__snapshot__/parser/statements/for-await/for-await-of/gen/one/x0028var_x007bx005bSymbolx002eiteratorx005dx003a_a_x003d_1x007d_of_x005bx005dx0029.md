# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/for-await/for-await-of/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/for-await/for-await-of/gen/one
> :: test: one
> :: case: (var {[Symbol.iterator]: a = 1} of [])
## Options

`````js
{}
`````
## Input

`````js
async function f() { for await (var {[Symbol.iterator]: a = 1} of []) ; }

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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 20,
                                "end": 24
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 24,
                                "end": 30
                            },
                            "initializer": {
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
                                                        "kind": 329,
                                                        "ellipsisToken": null,
                                                        "key": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 134299649,
                                                                    "text": "Symbol",
                                                                    "rawText": "Symbol",
                                                                    "flags": 96,
                                                                    "start": 38,
                                                                    "end": 44
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "iterator",
                                                                    "rawText": "iterator",
                                                                    "flags": 96,
                                                                    "start": 45,
                                                                    "end": 53
                                                                },
                                                                "flags": 536870944,
                                                                "start": 38,
                                                                "end": 53
                                                            },
                                                            "flags": 32,
                                                            "start": 37,
                                                            "end": 54
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 55,
                                                            "end": 57
                                                        },
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 59,
                                                            "end": 61
                                                        },
                                                        "flags": 32,
                                                        "start": 37,
                                                        "end": 61
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 37,
                                                "end": 61
                                            },
                                            "flags": 32,
                                            "start": 35,
                                            "end": 62
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 35,
                                        "end": 62
                                    }
                                ],
                                "flags": 16,
                                "start": 35,
                                "end": 62
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 62,
                                "end": 65
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 67,
                                    "end": 67
                                },
                                "flags": 32,
                                "start": 65,
                                "end": 68
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 69,
                                "end": 71
                            },
                            "flags": 80,
                            "start": 20,
                            "end": 71
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 71
                },
                "flags": 32,
                "start": 18,
                "end": 73
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "async function f() { for await (var {[Symbol.iterator]: a = 1} of []) ; }\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript

async function f() {
  for await ( of []);
}
```

### Diagnostics

```javascript
✔ No errors
```

