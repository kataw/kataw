# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/gen/with_strict_directive
> :: test: with strict directive
> :: case: var O = { async method(a, a) {} }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var O = { async method(a, a) {} }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 13,
                "end": 17
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
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "start": 23,
                                            "end": 29
                                        },
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "method",
                                                "rawText": "method",
                                                "flags": 96,
                                                "start": 29,
                                                "end": 36
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 37,
                                                        "end": 38
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 39,
                                                        "end": 41
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 352,
                                                "start": 37,
                                                "end": 42
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 44,
                                                    "end": 44
                                                },
                                                "flags": 32,
                                                "start": 42,
                                                "end": 45
                                            },
                                            "flags": 288,
                                            "start": 36,
                                            "end": 45
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 23,
                                "end": 45
                            },
                            "flags": 48,
                            "start": 21,
                            "end": 47
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 47
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 47
            },
            "flags": 16,
            "start": 13,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "'use strict'; var O = { async method(a, a) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 39, end: 42

```

