# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: d
- Path: e
> :: test: stand alone
> :: case: var asyncFn = async () => var await = 'test';
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
                            "start": 3,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 22,
                                "end": 25
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 13,
                                "end": 19
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 80,
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
                                                            "start": 29,
                                                            "end": 35
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392131,
                                                            "text": "test",
                                                            "rawText": "'test'",
                                                            "flags": 4194400,
                                                            "start": 37,
                                                            "end": 44
                                                        },
                                                        "flags": 16,
                                                        "start": 29,
                                                        "end": 44
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 29,
                                                "end": 44
                                            },
                                            "flags": 16,
                                            "start": 25,
                                            "end": 45
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 25,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 25,
                                "end": 45
                            },
                            "flags": 288,
                            "start": 13,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 45
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "var asyncFn = async () => var await = 'test';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 29, end: 35
✖ The parser expected to find a '}' to match the '{' token here - start: 45, end: 45

```

