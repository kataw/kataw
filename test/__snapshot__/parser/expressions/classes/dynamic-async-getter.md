# Kataw parser test case

## Input

`````js
class A {async get [foo](){}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
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
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "key": {
                            "kind": 81921,
                            "text": "get",
                            "rawText": "get",
                            "flags": 768,
                            "start": 14,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 18
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 194,
                                "expression": {
                                    "kind": 81921,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 20,
                                    "end": 23
                                },
                                "flags": 256,
                                "start": 18,
                                "end": 24
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 25,
                                "end": 26
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
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 256,
                                "start": 26,
                                "end": 28
                            },
                            "flags": 0,
                            "start": 24,
                            "end": 28
                        },
                        "flags": 256,
                        "start": 18,
                        "end": 28
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "class A {async get [foo](){}}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

