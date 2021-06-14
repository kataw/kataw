# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/gen/stand_alone
> :: test: stand alone
> :: case: var O = { async method(a, a) {} }
## Options

`````js
{}
`````
## Input

`````js
var O = { async method(a, a) {} }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "O",
                            "rawText": "O",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 257,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "start": 9,
                                            "end": 15
                                        },
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "method",
                                                "rawText": "method",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 22
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 23,
                                                        "end": 24
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 25,
                                                        "end": 27
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 352,
                                                "start": 23,
                                                "end": 28
                                            },
                                            "returnType": null,
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
                                                "start": 28,
                                                "end": 31
                                            },
                                            "flags": 288,
                                            "start": 22,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 9,
                                "end": 31
                            },
                            "flags": 48,
                            "start": 7,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "var O = { async method(a, a) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 25, end: 28

```

