# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/gen/stand_alone
> :: test: stand alone
> :: case: var asyncFn = async () => var await = 'test';
## Options

`````js
{}
`````
## Input

`````js
var asyncFn = async () => var await = 'test';
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
                "transformFlags": 0,
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
                            "text": "asyncFn",
                            "rawText": "asyncFn",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 11
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 19
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 21
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 25
                            },
                            "contents": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 25
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 25
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 25,
                "end": 29
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
                            "transformFlags": 0,
                            "start": 29,
                            "end": 35
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "test",
                            "rawText": "'test'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 44
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 29,
                        "end": 44
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 29,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "var asyncFn = async () => var await = 'test';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 25, end: 29
✖ Variable declaration expected. - start: 25, end: 29

```

