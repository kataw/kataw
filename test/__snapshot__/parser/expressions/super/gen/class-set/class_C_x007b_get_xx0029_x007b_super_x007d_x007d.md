# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: class-set
> :: case: class C { get x) { super; } }
## Input

`````js
class C { set x(_) { class C { get x) { super; } } } }
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
                "flags": 0,
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
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": {
                            "kind": 16499,
                            "flags": 64,
                            "start": 9,
                            "end": 13
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "_",
                                            "rawText": "_",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 16,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 544,
                                "start": 16,
                                "end": 18
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 0,
                                                "start": 20,
                                                "end": 26
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 96,
                                                "start": 26,
                                                "end": 28
                                            },
                                            "typeParameters": null,
                                            "members": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "elements": [
                                                    {
                                                        "kind": 280,
                                                        "decorators": null,
                                                        "declaredToken": null,
                                                        "staticToken": null,
                                                        "asyncKeyword": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 34,
                                                            "end": 36
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 30,
                                                        "end": 36
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 30,
                                                "end": 36
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 36
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 20,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 18,
                                "end": 36
                            },
                            "flags": 512,
                            "start": 15,
                            "end": 36
                        },
                        "flags": 512,
                        "start": 9,
                        "end": 36
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 203,
                            "chain": {
                                "kind": 225,
                                "superKeyword": {
                                    "kind": 4259935,
                                    "flags": 0,
                                    "start": 39,
                                    "end": 45
                                },
                                "flags": 96,
                                "start": 39,
                                "end": 45
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 45,
                                "end": 45
                            },
                            "flags": 536870944,
                            "start": 39,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 39,
                        "end": 46
                    }
                ],
                "flags": 16,
                "start": 39,
                "end": 46
            },
            "flags": 16,
            "start": 37,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "class C { set x(_) { class C { get x) { super; } } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 36, end: 37
✖ 'super' must be followed by an argument list or member access. - start: 45, end: 46
✖ Dot property must be an identifier - start: 45, end: 46
✖ Declaration or statement expected - start: 48, end: 50
✖ Declaration or statement expected - start: 50, end: 52
✖ Declaration or statement expected - start: 52, end: 54

```

