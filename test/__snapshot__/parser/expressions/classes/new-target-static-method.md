# Kataw parser test case

## Input

`````js
class A {static a(x=new.target){}}
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
                "text": "A",
                "rawText": "A",
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
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 9,
                            "end": 15
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 15,
                                "end": 17
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 211,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "target",
                                                "rawText": "target",
                                                "flags": 768,
                                                "start": 24,
                                                "end": 30
                                            },
                                            "flags": 768,
                                            "start": 20,
                                            "end": 30
                                        },
                                        "flags": 258,
                                        "start": 18,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 258,
                                "start": 18,
                                "end": 31
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
                                    "start": 32,
                                    "end": 32
                                },
                                "flags": 256,
                                "start": 31,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 33
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 33
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "class A {static a(x=new.target){}}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 80,
            "error": "'new.target' only allowed within functions",
            "start": 24,
            "end": 30
        }
    ],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

