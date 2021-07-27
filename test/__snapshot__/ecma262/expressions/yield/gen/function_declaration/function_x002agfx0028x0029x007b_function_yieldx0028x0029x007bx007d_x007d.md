# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: function *gf(){ function yield(){}; }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { function *gf(){ function yield(){}; } }}
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
                                "kind": 201360950,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 29,
                                "end": 31
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gf",
                                "rawText": "gf",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 31,
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
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 36,
                                                "end": 45
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 51
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 52,
                                                "end": 52
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 54,
                                                    "end": 54
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 55
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 55
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 55,
                                            "end": 56
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 56
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 58
                            },
                            "returnType": null,
                            "flags": 272,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 58
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 58
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 60
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function *gf(){ function yield(){}; } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'yield' as a name on a async generator declaration - start: 45, end: 51
✖ Declaration or statement expected - start: 60, end: 61

```

