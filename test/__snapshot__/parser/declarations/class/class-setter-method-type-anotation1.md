# Kataw parser test case

## Input

`````js
class Foo {set fooProp(value:number):void{}}
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 768,
                "start": 5,
                "end": 9
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
                        "getKeyword": {
                            "kind": 82031,
                            "flags": 768,
                            "start": 11,
                            "end": 14
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "fooProp",
                                "rawText": "fooProp",
                                "flags": 768,
                                "start": 14,
                                "end": 22
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
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 768,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 768,
                                                "start": 29,
                                                "end": 35
                                            },
                                            "flags": 0,
                                            "start": 28,
                                            "end": 35
                                        },
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 23,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4352,
                                "start": 23,
                                "end": 36
                            },
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 4259887,
                                    "flags": 768,
                                    "start": 37,
                                    "end": 41
                                },
                                "flags": 0,
                                "start": 36,
                                "end": 41
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 42,
                                    "end": 42
                                },
                                "flags": 256,
                                "start": 41,
                                "end": 43
                            },
                            "flags": 4096,
                            "start": 22,
                            "end": 43
                        },
                        "flags": 256,
                        "start": 11,
                        "end": 43
                    }
                ],
                "flags": 256,
                "start": 11,
                "end": 44
            },
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "class Foo {set fooProp(value:number):void{}}",
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

```

