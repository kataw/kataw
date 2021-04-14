# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-decl-extends
> :: case: static get() {}
## Input

`````js
class C extends Base { static get() {} }
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
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 81921,
                    "text": "Base",
                    "rawText": "Base",
                    "flags": 768,
                    "start": 15,
                    "end": 20
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 20
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 22,
                            "end": 29
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "get",
                                "rawText": "get",
                                "flags": 768,
                                "start": 29,
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 34,
                                "end": 35
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
                                    "start": 37,
                                    "end": 37
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 38
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 38
                        },
                        "flags": 256,
                        "start": 29,
                        "end": 38
                    }
                ],
                "flags": 256,
                "start": 22,
                "end": 40
            },
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "class C extends Base { static get() {} }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-decl-extends
> :: case: static get() {}
## Input

`````js
class C extends Base { static get() {} }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-decl-extends
> :: case: static get() {}
## Input

`````js
class C extends Base { static get() {} }
`````
```

