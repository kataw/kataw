# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/simple
> :: test: simple
> :: case: (function call(foo=await){})
## Options

`````js
{}
`````
## Input

`````js
(function call(foo=await){})
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 1,
                        "end": 9
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "call",
                        "rawText": "call",
                        "flags": 96,
                        "start": 9,
                        "end": 14
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 18
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 24
                                },
                                "flags": 34,
                                "start": 15,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 14,
                        "end": 25
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 26,
                            "end": 26
                        },
                        "flags": 32,
                        "start": 25,
                        "end": 27
                    },
                    "returnType": null,
                    "flags": 32,
                    "start": 1,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "(function call(foo=await){})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

(function call() {});
```

### Diagnostics

```javascript
✔ No errors
```

