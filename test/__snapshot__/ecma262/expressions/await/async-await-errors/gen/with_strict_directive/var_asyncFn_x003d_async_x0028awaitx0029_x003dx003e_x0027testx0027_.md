# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/gen/with_strict_directive
> :: test: with strict directive
> :: case: var asyncFn = async (await) => 'test';
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var asyncFn = async (await) => 'test';
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
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 33
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 40
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 41
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 44
                            },
                            "contents": {
                                "kind": 201392131,
                                "text": "test",
                                "rawText": "'test'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 51
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 51
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 17,
                        "end": 51
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "'use strict'; var asyncFn = async (await) => 'test';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

'\'use strict\'';
var asyncFn = async (await) => '\'test\'';
```

### Diagnostics

```javascript
✔ No errors
```

