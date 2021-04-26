# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: class C { get x) { super; } }
## Input

`````js
class C { *method() { class C { get x) { super; } } } }
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
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
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
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "method",
                                "rawText": "method",
                                "flags": 768,
                                "start": 11,
                                "end": 17
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 18,
                                "end": 19
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
                                                "flags": 768,
                                                "start": 21,
                                                "end": 27
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 768,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
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
                                                            "flags": 768,
                                                            "start": 35,
                                                            "end": 37
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 256,
                                                        "start": 31,
                                                        "end": 37
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 31,
                                                "end": 37
                                            },
                                            "flags": 128,
                                            "start": 21,
                                            "end": 37
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 21,
                                    "end": 37
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 37
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 37
                        },
                        "flags": 0,
                        "start": 9,
                        "end": 37
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 37
            },
            "flags": 128,
            "start": 0,
            "end": 37
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
                                    "flags": 768,
                                    "start": 40,
                                    "end": 46
                                },
                                "flags": 768,
                                "start": 40,
                                "end": 46
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 46,
                                "end": 46
                            },
                            "flags": 256,
                            "start": 40,
                            "end": 46
                        },
                        "flags": 128,
                        "start": 40,
                        "end": 47
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 40,
                "end": 47
            },
            "flags": 128,
            "start": 38,
            "end": 49
        }
    ],
    "isModule": false,
    "text": "class C { *method() { class C { get x) { super; } } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 37, end: 38
@{x2716}@ Unexpected token. - start: 37, end: 38
@{x2716}@ Unexpected token. - start: 37, end: 38
@{x2716}@ Statement expected - start: 37, end: 38
@{x2716}@ 'super' must be followed by an argument list or member access. - start: 46, end: 47
@{x2716}@ Dot property must be an identifier - start: 46, end: 47
@{x2716}@ Statement expected - start: 49, end: 51
@{x2716}@ Statement expected - start: 51, end: 53
@{x2716}@ Statement expected - start: 53, end: 55

```

