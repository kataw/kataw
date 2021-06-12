# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: let x = function f(foo = await bar){
## Input

`````js
'use strict'; let x = function f(foo = await bar){
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
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 21,
                                "end": 30
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 30,
                                "end": 32
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 33,
                                            "end": 36
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 38,
                                            "end": 44
                                        },
                                        "flags": 34,
                                        "start": 33,
                                        "end": 44
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 44,
                                        "end": 48
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 32,
                                "end": 49
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 50,
                                    "end": 50
                                },
                                "flags": 32,
                                "start": 49,
                                "end": 50
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 32,
                            "start": 21,
                            "end": 50
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 50
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 50
            },
            "flags": 33554448,
            "start": 13,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x = function f(foo = await bar){",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 44, end: 48
✖ The parser expected to find a '}' to match the '{' token here - start: 50, end: 50

```

