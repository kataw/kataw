# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let x = function *f(foo = await){}
## Input

`````js
'use strict'; let x = function *f(foo = await){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
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
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 21,
                                "end": 30
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 768,
                                "start": 30,
                                "end": 32
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 32,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 34,
                                            "end": 37
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 768,
                                            "start": 39,
                                            "end": 45
                                        },
                                        "flags": 258,
                                        "start": 34,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 258,
                                "start": 33,
                                "end": 46
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 47,
                                    "end": 47
                                },
                                "flags": 256,
                                "start": 46,
                                "end": 48
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 21,
                            "end": 48
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 48
                    }
                ],
                "flags": 128,
                "start": 17,
                "end": 48
            },
            "flags": 128,
            "start": 13,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "'use strict'; let x = function *f(foo = await){}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

