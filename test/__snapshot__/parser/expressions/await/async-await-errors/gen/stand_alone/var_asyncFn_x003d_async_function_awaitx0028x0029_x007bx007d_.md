# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\async-await-errors\gen\stand_alone
> :: test: stand alone
> :: case: var asyncFn = async function await() {};
## Input

`````js
var asyncFn = async function await() {};
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
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 13,
                                "end": 19
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 19,
                                "end": 28
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "start": 28,
                                "end": 34
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 34,
                                "end": 36
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 32,
                                "start": 36,
                                "end": 39
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 160,
                            "start": 13,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "var asyncFn = async function await() {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async generator expression - start: 28, end: 34

```

