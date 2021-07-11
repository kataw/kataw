# Kataw parser test case

## Input

`````js
var C = class { async *gen() {
    a\u0061wait: ;
}};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "start": 7,
                                "end": 13
                            },
                            "name": null,
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
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 15,
                                                "end": 21
                                            },
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 21,
                                                "end": 23
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "gen",
                                                    "rawText": "gen",
                                                    "flags": 96,
                                                    "start": 23,
                                                    "end": 26
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 384,
                                                    "start": 27,
                                                    "end": 28
                                                },
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [
                                                            {
                                                                "kind": 163,
                                                                "label": {
                                                                    "kind": 134299649,
                                                                    "text": "aawait",
                                                                    "rawText": "a\\u0061wait",
                                                                    "flags": 16481,
                                                                    "start": 30,
                                                                    "end": 46
                                                                },
                                                                "colonToken": {
                                                                    "kind": 21,
                                                                    "flags": 64,
                                                                    "start": 46,
                                                                    "end": 47
                                                                },
                                                                "statement": {
                                                                    "kind": 168,
                                                                    "flags": 16,
                                                                    "start": 47,
                                                                    "end": 49
                                                                },
                                                                "flags": 16401,
                                                                "start": 30,
                                                                "end": 49
                                                            }
                                                        ],
                                                        "flags": 16417,
                                                        "start": 30,
                                                        "end": 49
                                                    },
                                                    "flags": 32,
                                                    "start": 28,
                                                    "end": 51
                                                },
                                                "flags": 384,
                                                "start": 26,
                                                "end": 51
                                            },
                                            "flags": 384,
                                            "start": 15,
                                            "end": 51
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 15,
                                    "end": 51
                                },
                                "flags": 13,
                                "start": 32,
                                "end": 52
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 52
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 52
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "var C = class { async *gen() {\n    a\\u0061wait: ;\n}};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

var  C = class  {
  async * gen() {
    a\u0061wait: ;
  }
} ;

```

### Diagnostics

```javascript
✔ No errors
```

