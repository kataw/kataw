# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: r
> :: test: class-constructor
> :: case: new super;
## Options

`````js
{}
`````
## Input

`````js
class C { constructor() { new super; } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 22,
                                    "end": 23
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 210,
                                                    "newKeyword": {
                                                        "kind": 138477661,
                                                        "flags": 96,
                                                        "start": 25,
                                                        "end": 29
                                                    },
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 96,
                                                                "start": 29,
                                                                "end": 35
                                                            },
                                                            "flags": 96,
                                                            "start": 29,
                                                            "end": 35
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "start": 35,
                                                            "end": 35
                                                        },
                                                        "flags": 536870944,
                                                        "start": 29,
                                                        "end": 35
                                                    },
                                                    "argumentList": null,
                                                    "flags": 96,
                                                    "start": 25,
                                                    "end": 35
                                                },
                                                "flags": 16,
                                                "start": 25,
                                                "end": 36
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 25,
                                        "end": 36
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 38
                                },
                                "flags": 2048,
                                "start": 21,
                                "end": 38
                            },
                            "flags": 2048,
                            "start": 9,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 38
                },
                "flags": 7,
                "start": 32,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "class C { constructor() { new super; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 29, end: 36
✖ Dot property must be an identifier - start: 35, end: 36

```

