# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/for-await/mixed-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/for-await/mixed-cases/gen/case
> :: test: case
> :: case: (const {[Symbol.iterator]: a = 1} of [])
## Options

`````js
{}
`````
## Input

`````js
async function f() { let a; for await (const {[Symbol.iterator]: a = 1} of []) ; }
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 20,
                                "end": 24
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 24,
                                        "end": 26
                                    }
                                ],
                                "flags": 16,
                                "start": 24,
                                "end": 26
                            },
                            "flags": 33554448,
                            "start": 20,
                            "end": 27
                        },
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 27,
                                "end": 31
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 31,
                                "end": 37
                            },
                            "initializer": {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 37757004,
                                    "flags": 64,
                                    "start": 39,
                                    "end": 44
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 329,
                                                            "key": {
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 134299649,
                                                                        "text": "Symbol",
                                                                        "rawText": "Symbol",
                                                                        "flags": 96,
                                                                        "start": 47,
                                                                        "end": 53
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "iterator",
                                                                        "rawText": "iterator",
                                                                        "flags": 96,
                                                                        "start": 54,
                                                                        "end": 62
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 47,
                                                                    "end": 62
                                                                },
                                                                "flags": 32,
                                                                "start": 46,
                                                                "end": 63
                                                            },
                                                            "value": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 64,
                                                                "end": 66
                                                            },
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 68,
                                                                "end": 70
                                                            },
                                                            "flags": 32,
                                                            "start": 46,
                                                            "end": 70
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 46,
                                                    "end": 70
                                                },
                                                "flags": 32,
                                                "start": 44,
                                                "end": 71
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 44,
                                            "end": 71
                                        }
                                    ],
                                    "flags": 16777232,
                                    "start": 44,
                                    "end": 71
                                },
                                "flags": 33554448,
                                "start": 27,
                                "end": 71
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 71,
                                "end": 74
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 76,
                                    "end": 76
                                },
                                "flags": 32,
                                "start": 74,
                                "end": 77
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 78,
                                "end": 80
                            },
                            "flags": 80,
                            "start": 27,
                            "end": 80
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 80
                },
                "flags": 32,
                "start": 18,
                "end": 82
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 82
        }
    ],
    "isModule": false,
    "source": "async function f() { let a; for await (const {[Symbol.iterator]: a = 1} of []) ; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 82
}
```

### Printed

```javascript

async function f() {
  let a;
  for await (const {
    [Symbol.iterator]: a = 1
  } of [])
    ;
}

```

### Diagnostics

```javascript
✔ No errors
```

