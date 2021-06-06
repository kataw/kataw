# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/gen/with_strict_directive
> :: test: with strict directive
> :: case: var asyncFn = async function(await) {};
## Input

`````js
'use strict'; var asyncFn = async function(await) {};
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
                            "text": "asyncFn",
                            "rawText": "asyncFn",
                            "flags": 96,
                            "start": 17,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 27,
                                "end": 33
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 33,
                                "end": 42
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 43,
                                        "end": 48
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 96,
                                "start": 42,
                                "end": 49
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 51,
                                    "end": 51
                                },
                                "flags": 32,
                                "start": 49,
                                "end": 52
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 160,
                            "start": 27,
                            "end": 52
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 52
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 52
            },
            "flags": 16,
            "start": 13,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "'use strict'; var asyncFn = async function(await) {};",
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
✖ `await` expression cannot be used in function parameters - start: 43, end: 48

```

