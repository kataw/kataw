# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { get x) { super; } }
## Input

`````js
({ *method() { class C { get x) { super; } } } })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 160,
                                    "start": 11,
                                    "end": 12
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
                                                    "start": 14,
                                                    "end": 20
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 22
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
                                                                "flags": 96,
                                                                "start": 28,
                                                                "end": 30
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 24,
                                                            "end": 30
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 24,
                                                    "end": 30
                                                },
                                                "flags": 16,
                                                "start": 14,
                                                "end": 30
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 14,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 30
                                },
                                "flags": 160,
                                "start": 10,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 30
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 30
                },
                "flags": 32,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
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
                                    "start": 33,
                                    "end": 39
                                },
                                "flags": 96,
                                "start": 33,
                                "end": 39
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 39,
                                "end": 39
                            },
                            "flags": 32,
                            "start": 33,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 33,
                "end": 40
            },
            "flags": 16,
            "start": 31,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "({ *method() { class C { get x) { super; } } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 30, end: 31
✖ Expected a `;` - start: 31, end: 33
✖ 'super' must be followed by an argument list or member access. - start: 39, end: 40
✖ Dot property must be an identifier - start: 39, end: 40
✖ Statement expected - start: 42, end: 44
✖ Statement expected - start: 44, end: 46
✖ Statement expected - start: 46, end: 48
✖ Statement expected - start: 48, end: 49

```

