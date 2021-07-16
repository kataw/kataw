# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/gen/declaration
> :: test: declaration
> :: case: var [await] = [42];
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {var [await] = [42];}

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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 21
            },
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
                                "transformFlags": 0,
                                "start": 24,
                                "end": 27
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 324,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 29,
                                                        "end": 34
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 34
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 35
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 201392130,
                                                        "text": 42,
                                                        "rawText": "42",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 39,
                                                        "end": 41
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 41
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 37,
                                            "end": 42
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 27,
                                        "end": 42
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 42
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 43
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 43
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 44
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "async function * gen() {var [await] = [42];}\n",
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
✖ 'await' cannot be used as an identifier here - start: 29, end: 34

```

