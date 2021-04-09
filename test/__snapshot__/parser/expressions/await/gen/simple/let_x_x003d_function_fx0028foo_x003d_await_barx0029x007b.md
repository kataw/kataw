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
    "statements": [
        {
            "kind": 162,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncToken": null,
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "f",
                                "autofix": 0,
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
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 19,
                                            "end": 22
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 81921,
                                            "value": "await",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 24,
                                            "end": 30
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 30
                                    },
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "bar",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 30,
                                            "end": 34
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 30,
                                        "end": 34
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 19,
                                "end": 35
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 36
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 35,
                                "end": 36
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 36
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 36
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 36
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "let x = function f(foo = await bar){",
    "fileName": "__root__",
    "autofix": 0,
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
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: let x = function f(foo = await bar){
## Input

`````js
let x = function f(foo = await bar){
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: let x = function f(foo = await bar){
## Input

`````js
let x = function f(foo = await bar){
`````
```

