# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: let x = function f(foo = await bar){
## Input

`````js
let x = function f(foo = await bar){
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
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
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 7,
                                "end": 16
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 16,
                                "end": 18
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
                                            "start": 19,
                                            "end": 22
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 768,
                                            "start": 24,
                                            "end": 30
                                        },
                                        "flags": 258,
                                        "start": 19,
                                        "end": 30
                                    },
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 768,
                                            "start": 30,
                                            "end": 34
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 30,
                                        "end": 34
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 258,
                                "start": 18,
                                "end": 35
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 36
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 36
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 7,
                            "end": 36
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 36
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 36
            },
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "let x = function f(foo = await bar){",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 30,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 36,
            "end": 36
        }
    ],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

