# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: arg default
> :: case: async x => ok
## Input

`````js
function f(a = async x => ok) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 22,
                                "end": 25
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 14,
                                    "end": 22
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 14,
                                "end": 20
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "ok",
                                "rawText": "ok",
                                "flags": 768,
                                "start": 25,
                                "end": 28
                            },
                            "flags": 2304,
                            "start": 14,
                            "end": 28
                        },
                        "flags": 258,
                        "start": 11,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 10,
                "end": 29
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 31,
                    "end": 31
                },
                "flags": 256,
                "start": 29,
                "end": 32
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "function f(a = async x => ok) {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: arg default
> :: case: async x => ok
## Input

`````js
function f(a = async x => ok) {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: arg default
> :: case: async x => ok
## Input

`````js
function f(a = async x => ok) {}
`````
```

