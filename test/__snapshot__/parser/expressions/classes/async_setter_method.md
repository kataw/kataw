# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
class A {async set 11(x){}}
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
                "text": "A",
                "rawText": "A",
                "flags": 96,
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
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 9,
                            "end": 14
                        },
                        "key": {
                            "kind": 134299649,
                            "text": "set",
                            "rawText": "set",
                            "flags": 96,
                            "start": 14,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 9,
                        "end": 18
                    },
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
                                "kind": 201392130,
                                "text": 11,
                                "rawText": "11",
                                "flags": 96,
                                "start": 18,
                                "end": 21
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
                                            "flags": 96,
                                            "start": 22,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 22,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 22,
                                "end": 24
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 26
                        },
                        "flags": 0,
                        "start": 18,
                        "end": 26
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "class A {async set 11(x){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

class A {
  async set;
  11(x) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

