# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function foo(yield) {
## Input

`````js
function not_gen() { function foo(yield) { }}
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
                "kind": 81921,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 20,
                                "end": 29
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 29,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 768,
                                            "start": 34,
                                            "end": 39
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 34,
                                        "end": 39
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 33,
                                "end": 40
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 42,
                                    "end": 42
                                },
                                "flags": 256,
                                "start": 40,
                                "end": 44
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 20,
                            "end": 44
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 44
                },
                "flags": 256,
                "start": 18,
                "end": 45
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function foo(yield) { }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function foo(yield) {
## Input

`````js
function not_gen() { function foo(yield) { }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function foo(yield) {
## Input

`````js
function not_gen() { function foo(yield) { }}
`````
```

