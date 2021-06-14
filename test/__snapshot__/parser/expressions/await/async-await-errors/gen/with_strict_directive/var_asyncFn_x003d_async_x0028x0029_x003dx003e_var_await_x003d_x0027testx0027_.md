# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/gen/with_strict_directive
> :: test: with strict directive
> :: case: var asyncFn = async () => var await = 'test';
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var asyncFn = async () => var await = 'test';
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
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 36,
                                "end": 39
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 27,
                                "end": 33
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 39,
                                "end": 39
                            },
                            "flags": 288,
                            "start": 27,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 39
            },
            "flags": 16,
            "start": 13,
            "end": 39
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 39,
                "end": 43
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 43,
                            "end": 49
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "test",
                            "rawText": "'test'",
                            "flags": 4194400,
                            "start": 51,
                            "end": 58
                        },
                        "flags": 16,
                        "start": 43,
                        "end": 58
                    }
                ],
                "flags": 16,
                "start": 43,
                "end": 58
            },
            "flags": 16,
            "start": 39,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "'use strict'; var asyncFn = async () => var await = 'test';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 39, end: 43
✖ Variable declaration expected. - start: 39, end: 43

```

