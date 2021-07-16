# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/simple
> :: test: simple
> :: case: function*g(){ function yield(){}; }
## Options

`````js
{}
`````
## Input

`````js
function*g(){ function yield(){}; }
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
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
                                "start": 13,
                                "end": 22
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 28
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 29
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 31
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 32
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 32
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 33
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 35
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "function*g(){ function yield(){}; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'yield' as a name on a async generator declaration - start: 22, end: 28

```

