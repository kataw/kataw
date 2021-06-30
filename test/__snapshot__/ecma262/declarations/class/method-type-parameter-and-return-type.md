# Kataw parser test case

## Input

`````js
class Foo7<T> {
  bar<U>():number { return 42; }
}

`````

## Options

### Parser Options

`````js
{ allowTypes: true }
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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo7",
                "rawText": "Foo7",
                "flags": 96,
                "start": 5,
                "end": 10
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 11,
                                "end": 12
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 11,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 11,
                    "end": 12
                },
                "flags": 2097152,
                "start": 10,
                "end": 13
            },
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
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 21
                                },
                                "typeParameters": {
                                    "kind": 307,
                                    "declarations": {
                                        "kind": 337,
                                        "parameters": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "U",
                                                    "rawText": "U",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 23
                                                },
                                                "type": null,
                                                "assignToken": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 22,
                                                "end": 23
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 22,
                                        "end": 23
                                    },
                                    "flags": 2097152,
                                    "start": 21,
                                    "end": 24
                                },
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 26
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 27,
                                        "end": 33
                                    },
                                    "flags": 2097152,
                                    "start": 27,
                                    "end": 33
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 80,
                                                    "start": 35,
                                                    "end": 42
                                                },
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 42,
                                                    "rawText": "42",
                                                    "flags": 96,
                                                    "start": 42,
                                                    "end": 45
                                                },
                                                "flags": 80,
                                                "start": 35,
                                                "end": 46
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 35,
                                        "end": 46
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 48
                                },
                                "flags": 0,
                                "start": 21,
                                "end": 48
                            },
                            "flags": 0,
                            "start": 15,
                            "end": 48
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 48
                },
                "flags": 13,
                "start": 32,
                "end": 50
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "class Foo7<T> {\n  bar<U>():number { return 42; }\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

class Foo7<T> {
  bar<U>(): number { return 42; }
}

```

### Diagnostics

```javascript
✔ No errors
```

