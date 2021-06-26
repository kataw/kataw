# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/for-await/for-await-of/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/for-await/for-await-of/gen/Fifthteen
> :: test: Fifthteen
> :: case: (var {[Symbol.iterator]: a = 1} of [])
## Options

`````js
{}
`````
## Input

`````js
async function * f() { for await
(var {[Symbol.iterator]: a = 1} of [])  { } }
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
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
                                "start": 22,
                                "end": 26
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 26,
                                "end": 32
                            },
                            "initializer": {
                                "kind": 341,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 64,
                                    "start": 34,
                                    "end": 37
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
                                                                        "start": 40,
                                                                        "end": 46
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "iterator",
                                                                        "rawText": "iterator",
                                                                        "flags": 96,
                                                                        "start": 47,
                                                                        "end": 55
                                                                    },
                                                                    "flags": 536870944,
                                                                    "start": 40,
                                                                    "end": 55
                                                                },
                                                                "flags": 32,
                                                                "start": 39,
                                                                "end": 56
                                                            },
                                                            "value": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 57,
                                                                "end": 59
                                                            },
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 61,
                                                                "end": 63
                                                            },
                                                            "flags": 32,
                                                            "start": 39,
                                                            "end": 63
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 39,
                                                    "end": 63
                                                },
                                                "flags": 32,
                                                "start": 37,
                                                "end": 64
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 37,
                                            "end": 64
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 37,
                                    "end": 64
                                },
                                "flags": 16,
                                "start": 22,
                                "end": 67
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 64,
                                "end": 67
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 69,
                                    "end": 69
                                },
                                "flags": 32,
                                "start": 67,
                                "end": 70
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 74,
                                    "end": 74
                                },
                                "flags": 16,
                                "start": 71,
                                "end": 76
                            },
                            "flags": 80,
                            "start": 22,
                            "end": 76
                        }
                    ],
                    "flags": 32,
                    "start": 22,
                    "end": 76
                },
                "flags": 32,
                "start": 20,
                "end": 78
            },
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "async function * f() { for await\n(var {[Symbol.iterator]: a = 1} of [])  { } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript

async function * f() {
  for await ( of [])
    {
    }
}
```

### Diagnostics

```javascript
✔ No errors
```

