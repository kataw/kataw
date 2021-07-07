# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: function* gf() { var yield; }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { function* gf() { var yield; } }}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 29
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 29,
                                "end": 30
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gf",
                                "rawText": "gf",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 34
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
                                                "start": 37,
                                                "end": 41
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 41,
                                                            "end": 47
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "transformFlags": 4224,
                                                        "start": 41,
                                                        "end": 47
                                                    }
                                                ],
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 47
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 48
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 48
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 50
                            },
                            "returnType": null,
                            "flags": 272,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 50
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 52
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function* gf() { var yield; } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'yield' cannot be used as an identifier here - start: 41, end: 47
✖ Declaration or statement expected - start: 52, end: 53

```

