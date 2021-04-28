# Kataw parser test case

## Input

`````js
function foo(numVal: any, otherVal: mixed){}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 768,
                            "start": 13,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234252,
                                "flags": 768,
                                "start": 20,
                                "end": 24
                            },
                            "flags": 0,
                            "start": 19,
                            "end": 24
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 13,
                        "end": 24
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "otherVal",
                            "rawText": "otherVal",
                            "flags": 768,
                            "start": 25,
                            "end": 34
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "mixed",
                                    "rawText": "mixed",
                                    "flags": 768,
                                    "start": 35,
                                    "end": 41
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 35,
                                "end": 41
                            },
                            "flags": 0,
                            "start": 34,
                            "end": 41
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 25,
                        "end": 41
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 12,
                "end": 42
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 43,
                    "end": 43
                },
                "flags": 256,
                "start": 42,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "function foo(numVal: any, otherVal: mixed){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

