# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as static setter in class
> :: case: import
## Input

`````js
class x {static set import(x){}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 9,
                            "end": 15
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "import",
                                "rawText": "import",
                                "flags": 768,
                                "start": 19,
                                "end": 26
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 27,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4352,
                                "start": 27,
                                "end": 29
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 256,
                                "start": 29,
                                "end": 31
                            },
                            "flags": 4096,
                            "start": 26,
                            "end": 31
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 31
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 32
            },
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "class x {static set import(x){}}",
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
- Path: s
> :: test: as static setter in class
> :: case: import
## Input

`````js
class x {static set import(x){}}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as static setter in class
> :: case: import
## Input

`````js
class x {static set import(x){}}
`````
```

