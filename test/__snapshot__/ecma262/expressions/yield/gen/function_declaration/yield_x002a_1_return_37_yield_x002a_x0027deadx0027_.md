# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: yield * 1; return 37; yield * 'dead';
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { yield * 1; return 37; yield * 'dead'; }}
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
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "flags": 96,
                                    "transformFlags": 32,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 20,
                                "end": 30
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 20,
                            "end": 31
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 38
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 37,
                                "rawText": "37",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 41
                            },
                            "flags": 80,
                            "transformFlags": 256,
                            "start": 31,
                            "end": 42
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 48
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "flags": 96,
                                    "transformFlags": 32,
                                    "start": 48,
                                    "end": 50
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "dead",
                                    "rawText": "'dead'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 57
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 42,
                                "end": 57
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 42,
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
    "source": "function not_gen() { yield * 1; return 37; yield * 'dead'; }}",
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
✖ Declaration or statement expected - start: 60, end: 61

```

