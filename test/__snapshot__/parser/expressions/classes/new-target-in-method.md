# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
class A {a(x=new.target){}}
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
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 9,
                                "end": 10
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
                                            "start": 11,
                                            "end": 12
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 211,
                                            "name": {
                                                "kind": 81921,
                                                "text": "target",
                                                "rawText": "target",
                                                "flags": 768,
                                                "start": 17,
                                                "end": 23
                                            },
                                            "flags": 768,
                                            "start": 13,
                                            "end": 23
                                        },
                                        "flags": 258,
                                        "start": 11,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 258,
                                "start": 11,
                                "end": 24
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
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 256,
                                "start": 24,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 26
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 26
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": true,
    "text": "class A {a(x=new.target){}}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 80,
            "error": "'new.target' only allowed within functions",
            "start": 17,
            "end": 23
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

