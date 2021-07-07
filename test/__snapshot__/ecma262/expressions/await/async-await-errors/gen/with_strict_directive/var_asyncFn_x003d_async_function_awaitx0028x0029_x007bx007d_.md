# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/gen/with_strict_directive
> :: test: with strict directive
> :: case: var asyncFn = async function await() {};
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var asyncFn = async function await() {};
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
            "transformFlags": 0,
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
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 17,
                            "end": 25
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 33
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 42
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 48
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 49
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 52
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 53
                            },
                            "returnType": null,
                            "flags": 160,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 53
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 53
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "'use strict'; var asyncFn = async function await() {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async generator expression - start: 42, end: 48

```

