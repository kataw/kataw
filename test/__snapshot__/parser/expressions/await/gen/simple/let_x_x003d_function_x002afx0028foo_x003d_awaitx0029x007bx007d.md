# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/simple
> :: test: simple
> :: case: let x = function *f(foo = await){}
## Options

`````js
{}
`````
## Input

`````js
let x = function *f(foo = await){}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
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
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 7,
                                "end": 16
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 16,
                                "end": 18
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 18,
                                "end": 19
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
                                            "start": 20,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 31
                                        },
                                        "flags": 34,
                                        "start": 20,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 19,
                                "end": 32
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 33,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 34
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 288,
                            "start": 7,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 34
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 34
            },
            "flags": 33554448,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "let x = function *f(foo = await){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

let x = function * f(foo = await) {};
```

### Diagnostics

```javascript
✔ No errors
```

