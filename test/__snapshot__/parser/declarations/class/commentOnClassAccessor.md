# Kataw parser test case

## Input

`````js
class C {
  /**
   * Getter.
   */
  get bar(): number { return 1;}

  /**
   * Setter.
   */
  set bar(v) { }
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
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
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 65,
                                "start": 9,
                                "end": 40
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 40,
                                    "end": 44
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 45,
                                    "end": 46
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 47,
                                        "end": 54
                                    },
                                    "flags": 2097152,
                                    "start": 47,
                                    "end": 54
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
                                                    "start": 56,
                                                    "end": 63
                                                },
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 63,
                                                    "end": 65
                                                },
                                                "flags": 80,
                                                "start": 56,
                                                "end": 66
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 56,
                                        "end": 66
                                    },
                                    "flags": 32,
                                    "start": 54,
                                    "end": 67
                                },
                                "flags": 1024,
                                "start": 44,
                                "end": 67
                            },
                            "flags": 1024,
                            "start": 9,
                            "end": 67
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 65,
                                "start": 67,
                                "end": 99
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 99,
                                    "end": 103
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "v",
                                            "rawText": "v",
                                            "flags": 96,
                                            "start": 104,
                                            "end": 105
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 104,
                                    "end": 106
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 108,
                                        "end": 108
                                    },
                                    "flags": 32,
                                    "start": 106,
                                    "end": 110
                                },
                                "flags": 512,
                                "start": 103,
                                "end": 110
                            },
                            "flags": 512,
                            "start": 67,
                            "end": 110
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 110
                },
                "flags": 7,
                "start": 32,
                "end": 112
            },
            "flags": 16,
            "start": 0,
            "end": 112
        }
    ],
    "isModule": false,
    "source": "class C {\n  /**\n   * Getter.\n   */\n  get bar(): number { return 1;}\n\n  /**\n   * Setter.\n   */\n  set bar(v) { }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 112
}
```

### Printed

```javascript

 class C {
    get bar(): number {
    return 1;
    },
    set bar(v) {
    }
} 
```

### Diagnostics

```javascript
✔ No errors
```

