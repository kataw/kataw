# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: super.foo
## Input

`````js
function *P(){
  class D extends super.foo {}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "P",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 178,
                            "decorators": null,
                            "name": {
                                "kind": 81921,
                                "value": "D",
                                "autofix": 0,
                                "flags": 768,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 279,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 225,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 32,
                                        "end": 38
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 39,
                                        "end": 42
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 32,
                                    "end": 42
                                },
                                "typeParameter": null,
                                "flags": 128,
                                "start": 32,
                                "end": 42
                            },
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 44,
                                "end": 45
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 45
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 45
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 47
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "function *P(){\n  class D extends super.foo {}\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 38,
            "end": 39
        }
    ],
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: super.foo
## Input

`````js
function *P(){
  class D extends super.foo {}
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: super.foo
## Input

`````js
function *P(){
  class D extends super.foo {}
}
`````
```

