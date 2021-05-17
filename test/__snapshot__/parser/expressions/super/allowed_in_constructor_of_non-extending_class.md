# Kataw parser test case

## Input

`````js
class x { constructor(){ super.foo; }}
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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
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
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 22,
                                    "end": 23
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 0,
                                                            "start": 24,
                                                            "end": 30
                                                        },
                                                        "flags": 96,
                                                        "start": 24,
                                                        "end": 30
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 31,
                                                        "end": 34
                                                    },
                                                    "flags": 536870944,
                                                    "start": 24,
                                                    "end": 34
                                                },
                                                "flags": 16,
                                                "start": 24,
                                                "end": 35
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 24,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 37
                                },
                                "flags": 2048,
                                "start": 21,
                                "end": 37
                            },
                            "flags": 2048,
                            "start": 9,
                            "end": 37
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 37
                },
                "flags": 32,
                "start": 7,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "class x { constructor(){ super.foo; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

class x {
  constructor() {
    .foo;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

